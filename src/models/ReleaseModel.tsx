import { ContentModel } from './ContentModel'
import React from 'react'
import { Release } from '../cms/types'
import { Typography } from '@material-ui/core'

export class ReleaseModel extends ContentModel {
    release: Release

    constructor(release: Release) {
        super(release)
        this.release = release
    }

    getDashboardInfoComponent = () => (
        <>
            <Typography variant="body1">
                {this.release.artist.title.toUpperCase()}, <i>{this.release.title}</i>,{' '}
                {this.release.format}
            </Typography>
            <Typography variant="body1">[{this.release.uid}]</Typography>
        </>
    )
    getListRowTitle = () =>
        `[${this.release.uid}]    ${this.release.artist.title}, ${this.release.title}, ${this.release.format}`
    getDetailUrl = () => `/releases/${this.release.uid}`.toLowerCase()
}
