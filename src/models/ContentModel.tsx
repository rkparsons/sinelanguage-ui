import { Artist, Event, Podcast, Release } from '../cms/types'
import { Grid, GridSize, Typography } from '@material-ui/core'

import Centered from '~/components/Centered'
import Head from '~/components/Head'
import Image from 'gatsby-image'
import React from 'react'
import Scrollable from '~/components/Scrollable'

export abstract class ContentModel {
    content: Artist | Event | Podcast | Release
    isPlayableFromDashboard = true
    hoverGridSize: GridSize = 5
    thumbnailGridSize: GridSize = 3
    dashboardWidth: number = 1
    constructor(content: Artist | Event | Podcast | Release) {
        this.content = content
    }
    getDateMs = () => new Date(this.content.date).getTime()
    getImage = () => this.content.image
    getImageCaption = () => this.content.title
    getDashboardComponent = () => (
        <Image
            title={this.getImageCaption()}
            alt={this.getImageCaption()}
            sizes={{ ...this.getImage().fluid }}
        />
    )
    getThumbnailInfoComponent = () => <Typography variant="body1">{this.content.title}</Typography>
    getSEOComponent = () => (
        <Head
            title={this.content.title}
            description={this.content.description.description}
            image={this.content.image.fluid.src}
        />
    )
    getDetailComponent = () => (
        <>
            <Grid item xs={6}>
                <Centered size={7}>{this.getDashboardComponent()}</Centered>
            </Grid>
            <Grid item xs={6}>
                <Scrollable>{this.getDetailInfoComponent()}</Scrollable>
            </Grid>
        </>
    )
    abstract getDashboardInfoComponent(): JSX.Element
    abstract getListComponent(): JSX.Element

    abstract getDetailInfoComponent(): JSX.Element
    abstract getDetailUrl(): string
}
