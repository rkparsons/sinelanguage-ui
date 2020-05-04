import { Grid, Typography } from '@material-ui/core'
import React, { RefObject, useEffect, useState } from 'react'

import Analyser from '../Analyser'
import Audio from '../Audio'
import { TimeControl } from './TimeControl.style'
import moment from 'moment'

type ViewProps = {
    title: string
    streamUrl: string
    isPlaying: boolean
    audioRef: RefObject<HTMLAudioElement>
    onEnded(): void
    currentTimeMs: number
}

export default ({ title, streamUrl, isPlaying, audioRef, onEnded, currentTimeMs }: ViewProps) => (
    <TimeControl container direction="column" justify="space-between" alignItems="stretch">
        <Grid item>
            <Typography>{title}</Typography>
            <Typography>{moment.utc(currentTimeMs).format('HH:mm:ss')}</Typography>
        </Grid>
        <Grid item>
            {audioRef.current && <Analyser audioRef={audioRef} />}

            <Audio audioRef={audioRef} src={streamUrl} isPlaying={isPlaying} onEnded={onEnded} />
        </Grid>
    </TimeControl>
)
