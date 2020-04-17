import { Grid, Typography } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'

import Audio from '../Audio'
import { TimeControl } from './TimeControl.style'
import Waveform from '../Waveform'
import moment from 'moment'
import useRecursiveTimeout from '~/hooks/useRecursiveTimeout'

type ViewProps = {
    title: string
    streamUrl: string
    samples: number[]
    durationMs: number
    isPlaying: boolean
    setIsPlaying(isPlaying: boolean): void
    volume: number
    setVolume(volume: number): void
}

export default ({
    title,
    streamUrl,
    samples,
    durationMs,
    isPlaying,
    setIsPlaying,
    volume,
    setVolume,
}: ViewProps) => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [currentTimeMs, setCurrentTimeMs] = useState(0)

    useEffect(() => {
        setCurrentTimeMs(0)
    }, [streamUrl])

    useRecursiveTimeout(() => {
        if (audioRef.current) {
            setCurrentTimeMs(audioRef.current.currentTime * 1000)
        }
    }, 1000)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }, [volume, audioRef.current])

    return (
        <TimeControl container direction="column" justify="space-between" alignItems="stretch">
            <Grid item>
                <Typography>{title}</Typography>
                <Typography>
                    {moment.utc(currentTimeMs).format('H:mm:ss')} /{' '}
                    {moment.utc(durationMs).format('H:mm:ss')}
                </Typography>
            </Grid>
            <Grid item>
                <Waveform
                    audioRef={audioRef}
                    samples={samples}
                    currentTimeMs={currentTimeMs}
                    setCurrentTimeMs={setCurrentTimeMs}
                    durationMs={durationMs}
                    setIsPlaying={setIsPlaying}
                    volume={volume}
                />
                <Audio audioRef={audioRef} src={streamUrl} isPlaying={isPlaying} />
            </Grid>
        </TimeControl>
    )
}
