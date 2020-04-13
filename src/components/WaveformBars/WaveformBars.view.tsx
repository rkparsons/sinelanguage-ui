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
    const [progress, setProgress] = useState(0)
    const audioRef = useRef<HTMLAudioElement>(null)
    const svgRef = useRef<SVGSVGElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const lineHeight = 50,
        lineSpacing = 4

    useEffect(() => {
        if (audioRef.current) {
            isPlaying ? audioRef.current.play() : audioRef.current.pause()
        }
    }, [isPlaying, audioRef.current])

    const handleWaveformClick = useCallback((event: React.MouseEvent) => {
        if (svgRef.current) {
            const progressBar = svgRef.current.getBoundingClientRect()
            const progress =
                (event.clientX - progressBar.left) / (progressBar.right - progressBar.left)

            setProgress(progress)
            setIsPlaying(true)
        }
    }, [])

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.currentTime = (progress * track.duration) / 1000
            setIsPlaying(true)
        }
    }, [progress, audioRef.current])

    const updatePlayStatus = () => {
        if (audioRef.current) {
            setTimeStamp(moment.utc(audioRef.current.currentTime * 1000).format('HH:mm:ss'))
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
                {track.samples.map((sample, index) => (
                    <line
                        key={index}
                        x1={(index + 1) * lineSpacing}
                        y1={lineHeight}
                        x2={(index + 1) * lineSpacing}
                        y2={(1 - sample) * lineHeight}
                    />
                ))}
            </SVG>
        </>
    )
}
