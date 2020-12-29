import { Box, Grid, Typography } from '@material-ui/core'
import { Duration, PodcastId } from './PodcastRow.style'

import Desktop from '~/components/Desktop'
import Mobile from '~/components/Mobile'
import OverflowEllipsis from '~/components/OverflowEllipsis'
import { Podcast } from '~/cms/types'
import React from 'react'
import { getDurationTimestamp } from '~/utils/date'
import { marginSide } from '~/styles/sizes'
import moment from 'moment'

type ViewProps = {
    podcast: Podcast
}

export default ({ podcast }: ViewProps) => {
    const { uid, title, track, date } = podcast
    return (
        <Grid container justify="space-between">
            <Grid item xs={12} md={9}>
                <Box paddingLeft={marginSide}>
                    <OverflowEllipsis>
                        <Mobile>
                            <Typography variant="h3">
                                {title.toUpperCase()}, <PodcastId>{uid}</PodcastId>
                            </Typography>
                        </Mobile>
                        <Desktop>
                            <Typography variant="h3">                
                                <PodcastId>{uid}</PodcastId>
                                {title.toUpperCase()}
                            </Typography>
                        </Desktop>
                    </OverflowEllipsis>
                </Box>
            </Grid>
            <Grid item xs={6} md={2}>
                <Duration>
                    <Typography variant="h3">
                        {getDurationTimestamp(track.metadata.duration)}
                    </Typography>
                </Duration>
            </Grid>
            <Grid item xs={6} md={1}>
                <Box paddingRight={marginSide}>
                    <Typography variant="h3" align="right">
                        {moment(date).format(`YYYY`).toUpperCase()}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
