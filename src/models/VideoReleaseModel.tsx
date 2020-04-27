import { Grid, Typography } from '@material-ui/core'

import Centered from '~/components/Centered'
import React from 'react'
import { Release } from '../cms/types'
import { ReleaseModel } from './ReleaseModel'
import Video from '~/components/Video'

export class VideoReleaseModel extends ReleaseModel {
    isPlayableFromDashboard = false
    constructor(release: Release) {
        super(release)
        this.dashboardWidth = 2
        this.hoverGridSize = 12
        this.thumbnailGridSize = 6
    }
    getDashboardComponent = () => <Video src={this.release.video.file.url} />
    getDetailComponent = () => (
        <>
            <Grid item xs={12}>
                <Centered size={7}>
                    {this.getDashboardComponent()}
                    <br />
                    {this.getDetailInfoComponent()}
                </Centered>
            </Grid>
        </>
    )
    getDetailInfoComponent = () => (
        <Typography variant="body2" align="center">
            {this.release.artist.title.toUpperCase()}, <i>{this.release.title}</i>
        </Typography>
    )
}
