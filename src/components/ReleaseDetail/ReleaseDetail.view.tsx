import { Grid, Typography } from '@material-ui/core'

import ContentPlayButton from '~/components/ContentPlayButton'
import InvertOnHover from '~/components/InvertOnHover'
import React from 'react'
import { Release } from '~/cms/types'
import { getDurationTimestamp } from '~/utils/date'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => (
    <>
        <Typography variant="h3">
            {release.artist.title.toUpperCase()}, <i>{release.title}</i>
        </Typography>
        <br />
        <Typography variant="h3">[{release.uid}]</Typography>
        <Typography variant="h3">{release.format}</Typography>

        <ContentPlayButton content={release} trackIndex={0} />
        <br />

        {release.tracks.length > 1 && (
            <>
                <Typography variant="h3">TRACKLIST</Typography>
                <br />
                {release.tracks.map((track, index) => (
                    <InvertOnHover key={index}>
                        <Grid container key={index} justify="space-between">
                            <Grid item xs={8}>
                                <Typography variant="h3">
                                    {index + 1}&nbsp;&nbsp;&nbsp;{track.title}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h3">
                                    {getDurationTimestamp(track.metadata.duration)}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <ContentPlayButton content={release} trackIndex={index} />
                            </Grid>
                        </Grid>
                    </InvertOnHover>
                ))}
                <br />
            </>
        )}
    </>
)
