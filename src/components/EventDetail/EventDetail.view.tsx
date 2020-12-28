import { Box, Grid, Typography } from '@material-ui/core'

import { Event } from '~/cms/types'
import Mobile from '~/components/Mobile'
import React from 'react'
import ResponsiveGrid from '~/components/ResponsiveGrid'
import RichText from '~/components/RichText'
import TeaserVideo from '~/components/TeaserVideo'
import { maxContentWidth } from '~/styles/sizes'
import moment from 'moment'

type ViewProps = {
    event: Event
}

export default ({ event }: ViewProps) => {
    const { title, date, image, details, teaserVideo } = event
    
    return (
        <Box maxWidth={`${maxContentWidth}rem`}>
            <Typography variant="h3">{title.toUpperCase()}</Typography>
            <Typography variant="h3">
                {moment(date).format(`ddd, DD MMM YYYY`).toUpperCase()}
            </Typography>
            <br />
            <ResponsiveGrid container isDesktop={false}>
                <Grid item xs={12} sm={8} md={6}>
                    <TeaserVideo src={teaserVideo.file.url} />
                </Grid>
                <br />
            </ResponsiveGrid>

            <RichText json={details.json} variant="h3" />
        </Box>
    )
}
