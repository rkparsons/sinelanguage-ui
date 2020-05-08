import { Grid, Typography } from '@material-ui/core'
import { Release, Video } from '~/cms/types'

import React from 'react'
import Whitespace from '~/components/Whitespace'
import moment from 'moment'

type ViewProps = {
    release: Release | Video
    format: string
}

export default ({ release, format }: ViewProps) => (
    <Grid container justify="space-between">
        <Grid item xs={12} lg={12} xl={1}>
            <Typography variant="h3">{release.uid}</Typography>
        </Grid>
        <Grid item xs={12} lg={8} xl={8}>
            <Whitespace value="pre-wrap">
                <Typography variant="h3" style={{ whiteSpace: 'normal' }}>
                    {release.artist.title.toUpperCase()}, <i>{release.title}</i>
                </Typography>
            </Whitespace>
        </Grid>
        <Grid item xs={6} lg={2} xl={1}>
            <Typography variant="h4">{format}</Typography>
        </Grid>
        <Grid item xs={6} lg={2} xl={2}>
            <Typography variant="h3" align="right">
                {moment(release.date).format(`MMM YYYY`)}
            </Typography>
        </Grid>
    </Grid>
)
