import { Grid, Typography } from '@material-ui/core'

import React from 'react'
import { Release } from '~/cms/types'
import moment from 'moment'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => (
    <Grid container justify="space-between">
        <Grid item xs={1}>
            <Typography variant="h3">{release.uid.slice(0, 7)}</Typography>
        </Grid>
        <Grid item xs={8}>
            <Typography variant="h3">
                {release.artist.title.toUpperCase()}, <i>{release.title}</i>
            </Typography>
        </Grid>
        <Grid item xs={1}>
            <Typography variant="h4">{release.format}</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography variant="h3" align="right">
                {moment(release.date).format(`MMM YYYY`)}
            </Typography>
        </Grid>
    </Grid>
)
