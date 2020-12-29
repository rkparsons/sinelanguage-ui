import { Box, Grid, Typography } from '@material-ui/core'
import { Format, ReleaseId } from './ReleaseRow.style'
import { Release, Video } from '~/cms/types'

import OverflowEllipsis from '~/components/OverflowEllipsis'
import React from 'react'
import ResponsiveBox from '~/components/ResponsiveBox'
import { marginSide } from '~/styles/sizes'
import moment from 'moment'

type ViewProps = {
    release: Release | Video
    format: string
}

export default ({ release, format }: ViewProps) => {
    const { uid, originalArtist, artist, title, date } = release

    return (
        <Grid container justify="space-between" alignItems="flex-start">
            <ResponsiveBox isDesktop={false} paddingLeft={marginSide}>
                <Typography variant="h3">
                    <ReleaseId>{uid}</ReleaseId>
                </Typography>
            </ResponsiveBox>
            <Grid item xs={12} md={9}>
                <Box paddingLeft={marginSide} paddingRight={marginSide}>
                    <OverflowEllipsis>
                        <Typography variant="h3">
                            <ResponsiveBox isDesktop={true}>
                                <ReleaseId>{uid}</ReleaseId>
                            </ResponsiveBox>
                            {(originalArtist || artist.title).toUpperCase()}, <i>{title}</i>
                        </Typography>
                    </OverflowEllipsis>
                </Box>
            </Grid>
            <Grid item xs={6} md={2}>
                <Format>
                    <Typography variant="h3">{format}</Typography>
                </Format>
            </Grid>
            <Grid item xs={6} md={1}>
                <Box paddingRight={marginSide}>
                    <Typography variant="h3" align="right">
                        {moment(date).format(`YYYY`)}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
