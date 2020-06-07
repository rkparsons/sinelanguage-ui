import { Grid, Typography } from '@material-ui/core'

import Desktop from '~/components/Desktop'
import Mobile from '~/components/Mobile'
import { Podcast } from '~/cms/types'
import { PodcastId } from './PodcastRow.style'
import React from 'react'
import { getDurationTimestamp } from '~/utils/date'
import moment from 'moment'

type ViewProps = {
    podcast: Podcast
}

export default ({ podcast }: ViewProps) => {
    const { uid, title, track, date } = podcast
    return (
        <Grid container justify="space-between">
            <Grid item xs={12} md={9}>
                <Typography variant="h3">
                    <Desktop>
                        <PodcastId>{uid}</PodcastId>
                    </Desktop>
                    {title.toUpperCase()}
                    <Mobile>
                        , <PodcastId>{uid}</PodcastId>
                    </Mobile>
                </Typography>
            </Grid>
            <Grid item xs={6} md={2}>
                <Typography variant="h3">
                    {getDurationTimestamp(track.metadata.duration)}
                </Typography>
            </Grid>
            <Grid item xs={6} md={1}>
                <Typography variant="h3" align="right">
                    {moment(date).format(`YYYY`).toUpperCase()}
                </Typography>
            </Grid>
        </Grid>
    )
}
