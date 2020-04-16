import { Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import Audio from '../Audio'
import Info from '../Info'
import { Track } from '~/cms/types'
import Waveform from '../Waveform'
import moment from 'moment'

type ViewProps = {
    track: Track
    isPlaying: boolean
    setIsPlaying(isPlaying: boolean): void
}

export default ({ track, isPlaying, setIsPlaying }: ViewProps) => {
    console.log('rendering audiowaveform')
    const [fractionPlayed, setFractionPlayed] = useState(0)
    const [startTimeMs, setStartTimeMs] = useState(0)
    const [timestamp, setTimestamp] = useState<string>('00:00:00')
    const [currentTime, setCurrentTime] = useState(0)

    const updatePlayStatus = (currentTimeMs: number) => {
        setCurrentTime(currentTimeMs)
        setFractionPlayed(currentTimeMs / track.metadata.duration)
        setTimestamp(moment.utc(currentTimeMs).format('H:mm:ss'))
    }

    const handleWaveformClick = (progress: number) => {
        const newTimeMs = progress * track.metadata.duration

        setFractionPlayed(progress)
        setStartTimeMs(newTimeMs)
        updatePlayStatus(newTimeMs)
        setIsPlaying(true)
    }

    const handleTimeUpdate = (currentTimeMs: number) => {
        updatePlayStatus(currentTimeMs)
    }

    return (
        <Grid container direction="column">
            <Grid item xs={12}>
                <Typography>{Math.round(currentTime / 1000)}</Typography>
                <Info title={`${track.title}`} timestamp={timestamp} />
            </Grid>
            <Grid item xs={12}>
                <Waveform
                    samples={track.metadata.samples}
                    fractionPlayed={fractionPlayed}
                    onClick={handleWaveformClick}
                />
                <Audio
                    src={`${track.metadata.streamUrl}?client_id=c5a171200f3a0a73a523bba14a1e0a29`}
                    isPlaying={isPlaying}
                    startTimeMs={startTimeMs}
                    onTimeUpdate={handleTimeUpdate}
                />
            </Grid>
        </Grid>
    )
}
