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
}
