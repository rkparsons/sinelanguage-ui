import { Box, Grid, Typography } from '@material-ui/core'
import { Format, ReleaseId } from './ReleaseRow.style'
import { Release, Video } from '~/cms/types'

import Desktop from '~/components/Desktop'
import Mobile from '~/components/Mobile'
import OverflowEllipsis from '~/components/OverflowEllipsis'
import React from 'react'
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
            <Grid item xs={12} md={9}>
                <Box paddingLeft={marginSide} paddingRight={marginSide}>
                    <OverflowEllipsis>
                        <Mobile>
                            <Typography variant="h3">
                                <ReleaseId>{uid}</ReleaseId><br/>
                                {(originalArtist || artist.title).toUpperCase()}, <i>{title}</i>
                            </Typography>
                        </Mobile>
                        <Desktop>
                            <Typography variant="h3">
                                <ReleaseId>{uid}</ReleaseId>
                                {(originalArtist || artist.title).toUpperCase()}, <i>{title}</i>
                            </Typography>
                        </Desktop>
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
