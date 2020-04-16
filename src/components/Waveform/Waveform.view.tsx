import { Artist, Podcast, Release, Track } from '~/cms/types'
import { Grid, IconButton, Typography } from '@material-ui/core'
import { PlayArrow, SkipNext, SkipPrevious, Stop } from '@material-ui/icons'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import Controls from '~/components/AudioPlayer/Controls'
import { SVG } from './Waveform.style'
import SquareImage from '~/components/SquareImage'
import moment from 'moment'
import useRecursiveTimeout from '~/hooks/useRecursiveTimeout'
import useWindowSize from '~/hooks/useWindowSize'

type ViewProps = {
    media: Podcast | Release | Artist
    tracks: Track[]
}

export default ({ media, tracks }: ViewProps) => {
    const [trackIndex, setTrackIndex] = useState(0)
    const windowSize = useWindowSize()
    const [timeStamp, setTimeStamp] = useState<string>('00:00:00')
    const [played, setPlayed] = useState<number>(0)
    const audioRef = useRef<HTMLAudioElement>(null)
    const svgRef = useRef<SVGSVGElement>(null)
    const [isPlaying, setIsPlaying] = useState(true)
    const [svgWidth, setSvgWidth] = useState<number>()
    const [samples, setSamples] = useState<number[]>([])
    const lineHeight = 50

    useEffect(() => {
        if (svgRef.current) {
            const pixelWidth = svgRef.current.getBoundingClientRect().width
            setSvgWidth(pixelWidth)

            const noOfSamples = tracks[trackIndex].metadata.samples.length
            const pixelsPerChunk = 5
            const numberOfChunks = pixelWidth / pixelsPerChunk
            const chunkSize = noOfSamples / numberOfChunks
            let chunks = []
            for (var i = 0; i < noOfSamples; i += chunkSize) {
                chunks.push(tracks[trackIndex].metadata.samples.slice(i, i + chunkSize))
            }
            const chunksAveraged = chunks.map(
                chunk => chunk.reduce((a, b) => a + b, 0) / chunk.length
            )

            setSamples(chunksAveraged)
        }
    }, [windowSize, svgRef.current, trackIndex, tracks])

    useEffect(() => {
        if (audioRef.current) {
            isPlaying ? audioRef.current.play() : audioRef.current.pause()
        }
    }, [isPlaying, audioRef.current])

    const handleWaveformClick = useCallback(
        (event: React.MouseEvent) => {
            if (svgRef.current && audioRef.current) {
                const progressBar = svgRef.current.getBoundingClientRect()
                const progress =
                    (event.clientX - progressBar.left) / (progressBar.right - progressBar.left)

                audioRef.current.currentTime =
                    (progress * tracks[trackIndex].metadata.duration) / 1000
                updatePlayStatus()
                setIsPlaying(true)
            }
        },
        [svgRef.current, audioRef.current]
    )

    const updatePlayStatus = () => {
        if (audioRef.current) {
            setTimeStamp(moment.utc(audioRef.current.currentTime * 1000).format('H:mm:ss'))
            setPlayed((1000 * audioRef.current.currentTime) / tracks[trackIndex].metadata.duration)
        }
    }

    useRecursiveTimeout(updatePlayStatus, 1000)

    const getTracks = (): Track[] => {
        if (media.__typename === 'ContentfulPodcast') {
            return [(media as Podcast).track]
        } else if (media.__typename === 'ContentfulRelease') {
            return (media as Release).tracks
        } else {
            return []
        }
    }

    // todo: move client id to env vars

    return (
        <>
            <audio
                ref={audioRef}
                src={`${tracks[trackIndex].metadata.streamUrl}?client_id=c5a171200f3a0a73a523bba14a1e0a29`}
                preload="auto"
            ></audio>
            <Grid container alignItems="flex-end">
                <Grid item xs={1}>
                    <SquareImage title={media.title} image={media.image} />
                    <Controls
                        trackIndex={trackIndex}
                        setTrackIndex={setTrackIndex}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        trackCount={tracks.length}
                    />
                </Grid>
                <Grid item xs={11}>
                    <Grid container direction="column">
                        <Grid item xs={12}>
                            <Typography>
                                {media.uid} - {media.title}
                            </Typography>
                            <Typography>{getTracks()[trackIndex].title}</Typography>
                            <Typography>{timeStamp}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <SVG
                                ref={svgRef}
                                height={lineHeight}
                                onClick={handleWaveformClick}
                                viewBox={`0 0 ${svgWidth} ${lineHeight}`}
                                preserveAspectRatio="none"
                            >
                                {svgWidth &&
                                    samples.map((sample, index) => {
                                        const position = index / samples.length
                                        const lineSpacing = svgWidth / (samples.length + 1)

                                        return (
                                            <line
                                                key={index}
                                                x1={(index + 1) * lineSpacing}
                                                y1={lineHeight}
                                                x2={(index + 1) * lineSpacing}
                                                y2={(1 - sample) * lineHeight}
                                                stroke={position < played ? 'black' : 'grey'}
                                                strokeWidth={lineSpacing / 2}
                                            />
                                        )
                                    })}
                            </SVG>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
