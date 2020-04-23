import { Grid, Typography } from '@material-ui/core'

import { ContentModel } from './ContentModel'
import React from 'react'
import { Release } from '../cms/types'
import moment from 'moment'

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
    getListComponent = () => (
        <Grid container justify="space-between">
            <Grid item xs={1}>
                <Typography variant="h3">{this.release.uid.slice(0, 7)}</Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h3">
                    {this.release.artist.title.toUpperCase()}, <i>{this.release.title}</i>
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography variant="h4">{this.release.format}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="h3" align="right">
                    {moment(this.release.date).format(`MMM YYYY`)}
                </Typography>
            </Grid>
        </Grid>
    )
    getDetailUrl = () => `/releases/${this.release.uid}`.toLowerCase()
}
