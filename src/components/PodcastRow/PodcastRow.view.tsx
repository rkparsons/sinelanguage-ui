import { Grid, Typography } from '@material-ui/core'

import { Podcast } from '~/cms/types'
import React from 'react'
import { getDurationTimestamp } from '~/utils/date'
import moment from 'moment'

type ViewProps = {
    podcast: Podcast
}

export default ({ podcast }: ViewProps) => (
    <Grid container justify="space-between">
        <Grid item xs={12} lg={12} xl={1}>
            <Typography variant="h3">{podcast.uid}</Typography>
        </Grid>
        <Grid item xs={12} lg={9} xl={8}>
            <Typography variant="h3">{podcast.title.toUpperCase()}</Typography>
        </Grid>
        <Grid item xs={6} lg={1} xl={1}>
            <Typography variant="h3">
                {getDurationTimestamp(podcast.track.metadata.duration)}
            </Typography>
        </Grid>
        <Grid item xs={6} lg={2} xl={2}>
            <Typography variant="h3" align="right">
                {moment(podcast.date).format(`YYYY`).toUpperCase()}
            </Typography>
        </Grid>
    </Grid>
)
