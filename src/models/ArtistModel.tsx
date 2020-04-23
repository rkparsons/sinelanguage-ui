import React, { memo } from 'react'

import { Artist } from '../cms/types'
import { ContentModel } from './ContentModel'
import { Typography } from '@material-ui/core'

export class ArtistModel extends ContentModel {
    artist: Artist

    constructor(artist: Artist) {
        super(artist)
        this.artist = artist
    }

    getDashboardInfoComponent = () => (
        <>
            <Typography>{this.artist.title}</Typography>
        </>
    )
    getListRowTitle = () => this.artist.title
    getDetailUrl = () => `/artists/${this.artist.uid}`.toLowerCase()
}
