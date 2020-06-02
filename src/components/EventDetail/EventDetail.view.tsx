import { Box, Grid, Hidden, Typography } from '@material-ui/core'

import { Event } from '~/cms/types'
import React from 'react'
import TeaserVideo from '~/components/TeaserVideo'
import { maxContentWidth } from '~/styles/sizes'
import moment from 'moment'

type ViewProps = {
    event: Event
}

export default ({ event }: ViewProps) => {
    const { title, date, image, description, teaserVideo } = event
    return (
        <Box maxWidth={`${maxContentWidth}rem`}>
            <Typography variant="h3">{title.toUpperCase()}</Typography>
            <Typography variant="h3">
                {moment(date).format(`ddd, DD MMM YYYY`).toUpperCase()}
            </Typography>
            <br />

            <Hidden mdUp>
                <Grid container>
                    <Grid item xs={12} sm={8} md={6}>
                        <TeaserVideo src={teaserVideo.file.url} />
                    </Grid>
                </Grid>
                <br />
            </Hidden>

            <Typography variant="h3">{description.description}</Typography>
        </Box>
    )
}
