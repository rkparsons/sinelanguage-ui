import { Box, Grid, Typography } from '@material-ui/core'
import { Release, Video } from '~/cms/types'

import React from 'react'
import moment from 'moment'

type ViewProps = {
    release: Release | Video
    format: string
}

export default ({ release, format }: ViewProps) => {
    const { uid, originalArtist, artist, title, date } = release

    return (
        <Grid container justify="space-between" alignItems="flex-start">
            <Grid item xs={12} xl={1}>
                <Typography variant="h3">{uid}</Typography>
            </Grid>
            <Grid item xs={12} xl={8}>
                <Box whiteSpace="pre-wrap">
                    <Typography variant="h3">
                        {(originalArtist || artist.title).toUpperCase()}, <i>{title}</i>
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={6} xl={1}>
                <Typography variant="h3">{format}</Typography>
            </Grid>
            <Grid item xs={6} xl={2}>
                <Typography variant="h3" align="right">
                    {moment(date).format(`YYYY`)}
                </Typography>
            </Grid>
        </Grid>
    )
}
