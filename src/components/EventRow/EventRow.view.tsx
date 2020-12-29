import { Box, Grid, Typography } from '@material-ui/core'
import { Date, Location } from './EventRow.style'

import { Event } from '~/cms/types'
import React from 'react'
import ResponsiveBox from '~/components/ResponsiveBox'
import ResponsiveTypography from '~/components/ResponsiveTypography'
import { marginSide } from '~/styles/sizes'
import moment from 'moment'

type ViewProps = {
    event: Event
}

export default ({ event }: ViewProps) => {
    const { date, title, artists, location } = event

    return (
        <Grid container>
            <Grid item xs={12} md={9}>
                <Box paddingLeft={marginSide} paddingRight={marginSide}>
                    <Typography variant="h3">
                        <Date>{moment(date).format('MMM. DD, YYYY')}</Date>
                        <ResponsiveBox isDesktop={true}>
                            {title} – {artists.join(', ')}
                        </ResponsiveBox>
                    </Typography>
                    <ResponsiveTypography isDesktop={false} variant="h3">{title}</ResponsiveTypography>
                    <ResponsiveTypography isDesktop={false} variant="h3">{artists.join(', ')}</ResponsiveTypography>
                </Box>
            </Grid>
            <Grid item xs={12} md={3}>
                <Location>
                    <Typography variant="h3">{location}</Typography>
                </Location>
            </Grid>
        </Grid>
    )
}
