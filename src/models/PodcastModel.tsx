import { Grid, Typography } from '@material-ui/core'
import React, { memo } from 'react'

import { ContentModel } from './ContentModel'
import { Podcast } from '../cms/types'
import moment from 'moment'

export class PodcastModel extends ContentModel {
    podcast: Podcast

    constructor(podcast: Podcast) {
        super(podcast)
        this.podcast = podcast
    }

    getDashboardInfoComponent = () => (
        <>
            <Typography variant="body1">{this.podcast.title.toUpperCase()}, Podcast</Typography>
            <Typography variant="body1">[{this.podcast.uid}]</Typography>
        </>
    )
    getListComponent = () => (
        <Grid container justify="space-between">
            <Grid item xs={1}>
                <Typography variant="h3">{this.podcast.uid}</Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h3">{this.podcast.title.toUpperCase()}</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography variant="h3">
                    {moment.utc(this.podcast.track.metadata.duration).format('H:mm:ss')}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="h3" align="right">
                    {moment(this.podcast.date).format(`MMM YY`).toUpperCase()}
                </Typography>
            </Grid>
        </Grid>
    )
    getDetailUrl = () => `/podcasts/${this.podcast.uid}`.toLowerCase()
}
