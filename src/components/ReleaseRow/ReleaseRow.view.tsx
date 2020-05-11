import { Grid, Typography } from '@material-ui/core'
import { Release, Video } from '~/cms/types'

import Padding from '~/components/Padding'
import React from 'react'
import Whitespace from '~/components/Whitespace'
import moment from 'moment'

type ViewProps = {
    release: Release | Video
    format: string
}

export default ({ release, format }: ViewProps) => (
    <Grid container justify="space-between" alignItems="flex-start">
        <Grid item xs={12} xl={1}>
            <Padding left>
                <Typography variant="h3">{release.uid}</Typography>
            </Padding>
        </Grid>
        <Grid item xs={12} xl={8}>
            <Whitespace value="pre-wrap">
                <Typography variant="h3">
                    {release.artist.title.toUpperCase()}, <i>{release.title}</i>
                </Typography>
            </Whitespace>
        </Grid>
        <Grid item xs={6} xl={1}>
            <Typography variant="h4">{format}</Typography>
        </Grid>
        <Grid item xs={6} xl={2}>
            <Padding right>
                <Typography variant="h3" align="right">
                    {moment(release.date).format(`MMM YYYY`)}
                </Typography>
            </Padding>
        </Grid>
    </Grid>
)
