import Centered from '~/components/Centered'
import Overlay from '~/components/Overlay'
import React from 'react'
import { Release } from '../cms/types'
import { ReleaseModel } from './ReleaseModel'
import { Typography } from '@material-ui/core'
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
            {this.release.artist.title.toUpperCase()}, <i>{this.release.title}</i>
        </Typography>
    )
}
