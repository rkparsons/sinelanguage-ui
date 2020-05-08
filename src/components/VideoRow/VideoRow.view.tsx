import { Grid, Typography } from '@material-ui/core'

import React from 'react'
import { Video } from '~/cms/types'
import moment from 'moment'

type ViewProps = {
    video: Video
}

export default ({ video }: ViewProps) => (
    <Grid container justify="space-between">
        <Grid item xs={12} lg={12} xl={1}>
            <Typography variant="h3">{video.uid.slice(0, 7)}</Typography>
        </Grid>
        <Grid item xs={12} lg={9} xl={8}>
            <Typography variant="h3">
                {video.artist.title.toUpperCase()}, <i>{video.title}</i>
            </Typography>
        </Grid>
        <Grid item xs={6} lg={1} xl={1}>
            <Typography variant="h4">Video</Typography>
        </Grid>
        <Grid item xs={6} lg={2} xl={2}>
            <Typography variant="h3" align="right">
                {moment(video.date).format(`MMM YYYY`)}
            </Typography>
        </Grid>
    </Grid>
)
