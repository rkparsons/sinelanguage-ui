import React, { memo } from 'react'

import { ContentModel } from './ContentModel'
import { Podcast } from '../cms/types'
import { Typography } from '@material-ui/core'

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
        <Typography variant="h3">
            [{this.podcast.uid}] {this.podcast.title}
        </Typography>
    )
    getDetailUrl = () => `/podcasts/${this.podcast.uid}`.toLowerCase()
}
