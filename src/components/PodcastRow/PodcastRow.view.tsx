import { Grid, Typography } from '@material-ui/core'

import { Podcast } from '~/cms/types'
import React from 'react'
import moment from 'moment'

type ViewProps = {
    podcast: Podcast
}

export default ({ podcast }: ViewProps) => (
    <Grid container justify="space-between">
        <Grid item xs={1}>
            <Typography variant="h3">{podcast.uid}</Typography>
        </Grid>
        <Grid item xs={8}>
            <Typography variant="h3">{podcast.title.toUpperCase()}</Typography>
        </Grid>
        <Grid item xs={1}>
            <Typography variant="h3">
                {moment.utc(podcast.track.metadata.duration).format('H:mm:ss')}
            </Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography variant="h3" align="right">
                {moment(podcast.date).format(`MMM YYYY`).toUpperCase()}
            </Typography>
        </Grid>
    </Grid>
)
