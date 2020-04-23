import { Artist, Event, Podcast, Release } from '../cms/types'

import Image from 'gatsby-image'
import React from 'react'

export abstract class ContentModel {
    content: Artist | Event | Podcast | Release
    isPlayableFromDashboard = true
    hoverWidth: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 5
    constructor(content: Artist | Event | Podcast | Release) {
        this.content = content
    }
    getDateMs = () => new Date(this.content.date).getTime()
    getImage = () => this.content.image
    getImageCaption = () => this.content.title
    getDashboardWidth = () => 1
    getDashboardComponent = () => (
        <Image
            title={this.getImageCaption()}
            alt={this.getImageCaption()}
            sizes={{ ...this.getImage().fluid }}
        />
    )
    abstract getDashboardInfoComponent(): JSX.Element
    abstract getListComponent(): JSX.Element
    abstract getDetailUrl(): string
}
