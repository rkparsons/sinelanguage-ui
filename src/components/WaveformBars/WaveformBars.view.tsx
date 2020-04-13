import { IconButton, Typography } from '@material-ui/core'
import { PlayArrow, Stop } from '@material-ui/icons'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import moment, { Duration } from 'moment'

import { Podcast } from '~/cms/types'
import { SVG } from './WaveformBars.style'
import { Track } from '~/types'
import useRecursiveTimeout from '~/hooks/useRecursiveTimeout'

// todo: uninstall loadable components and react-waves
type ViewProps = {
    audio: Podcast
    track: Track
}

export default ({ audio, track }: ViewProps) => {
    const [timeStamp, setTimeStamp] = useState<string>('00:00:00')
    const [played, setPlayed] = useState<number>(0)
    const audioRef = useRef<HTMLAudioElement>(null)
    const svgRef = useRef<SVGSVGElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [lineSpacing, setLineSpacing] = useState<number>()

    const lineHeight = 50

    useEffect(() => {
        if (svgRef.current) {
            setLineSpacing(svgRef.current.getBoundingClientRect().width / track.samples.length)
        }
    }, [svgRef.current, track])

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

            <SVG ref={svgRef} height={lineHeight} onClick={handleWaveformClick}>
                {lineSpacing &&
                    track.samples.map((sample, index) => {
                        const position = index / track.samples.length

                        return (
                            <line
                                key={index}
                                x1={(index + 1) * lineSpacing}
                                y1={lineHeight}
                                x2={(index + 1) * lineSpacing}
                                y2={(1 - sample) * lineHeight}
                                stroke={position < played ? 'red' : 'black'}
                            />
                        )
                    })}
            </SVG>
        </>
    )
}
