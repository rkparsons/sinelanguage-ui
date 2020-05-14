import { Box, Grid, Typography } from '@material-ui/core'
import { Release, Track } from '~/cms/types'
import { TrackNumber, TrackRow } from './TrackRow.style'

import ContentPlayButton from '~/components/ContentPlayButton'
import React from 'react'
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
            <Box display="flex">
                <Box>
                    <TrackNumber>
                        <Typography variant="h3">{index + 1}</Typography>
                    </TrackNumber>
                </Box>
                <Box flexGrow={1}>
                    <Grid container key={index} justify="space-between">
                        <Grid item xs={12} sm={8}>
                            <Typography variant="h3">{track.title}</Typography>
                        </Grid>
                        <Grid item xs={3} sm={2}>
                            <Typography variant="h3">
                                {getDurationTimestamp(track.metadata.duration)}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <ContentPlayButton
                                content={release}
                                trackIndex={index}
                                isLight={true}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </TrackRow>
    )
}
