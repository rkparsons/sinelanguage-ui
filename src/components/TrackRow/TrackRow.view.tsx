import { Grid, Typography } from '@material-ui/core'
import { Release, Track } from '~/cms/types'

import ContentPlayButton from '~/components/ContentPlayButton'
import React from 'react'
import { TrackRow } from './TrackRow.style'
import { getDurationTimestamp } from '~/utils/date'
import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    release: Release
    track: Track
    index: number
}

export default ({ release, track, index }: ViewProps) => {
    const { loadMedia } = useAudioContext()

    const playTrack = (index: number) => {
        if (track.metadata.streamUrl) {
            loadMedia(release, index)
        }
    }

    return (
        <TrackRow onClick={() => playTrack(index)}>
            <Grid container key={index} justify="space-between">
                <Grid item xs={8}>
                    <Typography variant="h3">
                        {index + 1}&nbsp;&nbsp;&nbsp;{track.title}
                    </Typography>
                </Grid>
                {track.metadata.duration && (
                    <Grid item>
                        <Typography variant="h3">
                            {getDurationTimestamp(track.metadata.duration)}
                        </Typography>
                    </Grid>
                )}
                {track.metadata.streamUrl && (
                    <Grid item>
                        <ContentPlayButton content={release} trackIndex={index} isLight={true} />
                    </Grid>
                )}
            </Grid>
        </TrackRow>
    )
}
