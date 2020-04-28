import { Grid, Typography } from '@material-ui/core'

import Centered from '~/components/Centered'
import { ContentModel } from './ContentModel'
import Overlay from '~/components/Overlay'
import React from 'react'
import TeaserVideo from '~/components/TeaserVideo'
import { Video } from '../cms/types'
import moment from 'moment'

export class VideoModel extends ContentModel {
    video: Video
    isPlayableFromDashboard = false
    constructor(video: Video) {
        super(video)
        this.video = video
        this.dashboardWidth = 2
        this.hoverGridSize = 12
        this.thumbnailGridSize = 6
    }
    getDashboardInfoComponent = () => (
        <>
            <Typography variant="body1">
                {this.video.artist.title.toUpperCase()}, <i>{this.video.title}</i>, Video
            </Typography>
            <Typography variant="body1">[{this.video.uid}]</Typography>
        </>
    )
    getListComponent = () => (
        <Grid container justify="space-between">
            <Grid item xs={1}>
                <Typography variant="h3">{this.video.uid.slice(0, 7)}</Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h3">
                    {this.video.artist.title.toUpperCase()}, <i>{this.video.title}</i>
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography variant="h4">Video</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="h3" align="right">
                    {moment(this.video.date).format(`MMM YYYY`)}
                </Typography>
            </Grid>
        </Grid>
    )
    getDetailUrl = () => `/releases/video/${this.video.uid}`.toLowerCase()

    getDashboardComponent = () => <TeaserVideo src={this.video.teaserVideo.file.url} />
    getDetailComponent = () => (
        <Overlay>
            <Centered size={7}>
                {this.getDashboardComponent()}
                <br />
                {this.getDetailInfoComponent()}
            </Centered>
        </Overlay>
    )
    getDetailInfoComponent = () => (
        <Typography variant="body2" align="center">
            {this.video.artist.title.toUpperCase()}, <i>{this.video.title}</i>
        </Typography>
    )
}
