import { Grid, Typography } from '@material-ui/core'
import React, { useRef, useState } from 'react'

import Audio from '../Audio'
import { Track } from '~/cms/types'
import Waveform from '../Waveform'
import moment from 'moment'
import useRecursiveTimeout from '~/hooks/useRecursiveTimeout'

type ViewProps = {
    track: Track
    isPlaying: boolean
    setIsPlaying(isPlaying: boolean): void
}

// todo: move clientId to env vars
export default ({ track, isPlaying, setIsPlaying }: ViewProps) => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [milliseconds, setMilliseconds] = useState(0)

    const handleWaveformClick = (progress: number) => {
        const currentTimeMs = progress * track.metadata.duration
        if (audioRef.current) {
            audioRef.current.currentTime = currentTimeMs
        }

        setMilliseconds(currentTimeMs)
        setIsPlaying(true)
    }

    useRecursiveTimeout(() => {
        if (audioRef.current) {
            setMilliseconds(audioRef.current.currentTime * 1000)
        }
    }, 1000)

    return (
        <Grid container direction="column">
            <Grid item xs={12}>
                <Typography>{track.title}</Typography>
                <Typography>{moment.utc(milliseconds).format('H:mm:ss')}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Waveform
                    samples={track.metadata.samples}
                    fractionPlayed={milliseconds / track.metadata.duration}
                    onClick={handleWaveformClick}
                />
                <Audio
                    audioRef={audioRef}
                    src={`${track.metadata.streamUrl}?client_id=c5a171200f3a0a73a523bba14a1e0a29`}
                    isPlaying={isPlaying}
                />
            </Grid>
        </Grid>
    )
}
