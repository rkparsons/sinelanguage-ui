import { IconButton, Typography } from '@material-ui/core'
import { PlayArrow, Stop } from '@material-ui/icons'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import moment, { Duration } from 'moment'

import { Podcast } from '~/cms/types'
import { SVG } from './Waveform.style'
import { Track } from '~/types'
import useRecursiveTimeout from '~/hooks/useRecursiveTimeout'
import useWindowSize from '~/hooks/useWindowSize'

type ViewProps = {
    audio: Podcast
    track: Track
}

export default ({ audio, track }: ViewProps) => {
    const windowSize = useWindowSize()
    const [timeStamp, setTimeStamp] = useState<string>('00:00:00')
    const [played, setPlayed] = useState<number>(0)
    const audioRef = useRef<HTMLAudioElement>(null)
    const svgRef = useRef<SVGSVGElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [svgWidth, setSvgWidth] = useState<number>()
    const [samples, setSamples] = useState<number[]>([])
    const lineHeight = 50

    useEffect(() => {
        if (svgRef.current) {
            const pixelWidth = svgRef.current.getBoundingClientRect().width
            setSvgWidth(pixelWidth)

            const noOfSamples = track.samples.length
            const pixelsPerChunk = 10
            const numberOfChunks = pixelWidth / pixelsPerChunk
            const chunkSize = noOfSamples / numberOfChunks
            let chunks = []
            for (var i = 0; i < noOfSamples; i += chunkSize) {
                chunks.push(track.samples.slice(i, i + chunkSize))
            }
            const chunksAveraged = chunks.map(
                chunk => chunk.reduce((a, b) => a + b, 0) / chunk.length
            )

            setSamples(chunksAveraged)
        }
    }, [windowSize, svgRef.current])

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

                audioRef.current.currentTime = (progress * track.duration) / 1000
                // setIsPlaying(true)
            }
        },
        [svgRef.current, audioRef.current]
    )

    const updatePlayStatus = () => {
        if (audioRef.current) {
            setTimeStamp(moment.utc(audioRef.current.currentTime * 1000).format('HH:mm:ss'))
            setPlayed((1000 * audioRef.current.currentTime) / track.duration)
        }
    }

    useRecursiveTimeout(updatePlayStatus, 1000)

    return (
        <>
            <Typography>
                {audio.uid} - {audio.title}
            </Typography>
            <Typography>{timeStamp}</Typography>
            <IconButton onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Stop /> : <PlayArrow />}
            </IconButton>

            <audio
                ref={audioRef}
                src={`${track.stream_url}?client_id=c5a171200f3a0a73a523bba14a1e0a29`}
                preload="auto"
            ></audio>

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
                                stroke={position < played ? 'red' : 'black'}
                                strokeWidth={lineSpacing / 2}
                            />
                        )
                    })}
            </SVG>
        </>
    )
}
