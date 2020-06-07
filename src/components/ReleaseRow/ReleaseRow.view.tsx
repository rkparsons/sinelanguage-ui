import { Grid, Typography } from '@material-ui/core'
import { Release, Video } from '~/cms/types'

import Desktop from '~/components/Desktop'
import Mobile from '~/components/Mobile'
import React from 'react'
import { ReleaseId } from './ReleaseRow.style'
import moment from 'moment'

type ViewProps = {
    release: Release | Video
    format: string
}

export default ({ release, format }: ViewProps) => {
    const { uid, originalArtist, artist, title, date } = release

    return (
        <Grid container justify="space-between" alignItems="flex-start">
            <Mobile>
                <Typography variant="h3">
                    <ReleaseId>{uid}</ReleaseId>
                </Typography>
            </Mobile>
            <Grid item xs={12} md={9}>
                <Typography variant="h3">
                    <Desktop>
                        <ReleaseId>{uid}</ReleaseId>
                    </Desktop>
                    {(originalArtist || artist.title).toUpperCase()}, <i>{title}</i>
                </Typography>
            </Grid>
            <Grid item xs={6} md={2}>
                <Typography variant="h3">{format}</Typography>
            </Grid>
            <Grid item xs={6} md={1}>
                <Typography variant="h3" align="right">
                    {moment(date).format(`YYYY`)}
                </Typography>
            </Grid>
        </Grid>
    )
}
