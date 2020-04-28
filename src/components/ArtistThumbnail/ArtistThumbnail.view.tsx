import { Artist, Release } from '~/cms/types'
import { Grid, Typography } from '@material-ui/core'

import Image from 'gatsby-image'
import MediaLink from '~/components/MediaLink'
import React from 'react'
import { getUrl } from '~/utils/content'
import moment from 'moment'

type ViewProps = {
    artist: Artist
    index: number
}

export default ({ artist, index }: ViewProps) => (
    <Grid item xs={3} key={index}>
        <MediaLink url={getUrl(artist)}>
            <Image title={artist.title} alt={artist.title} sizes={{ ...artist.image.fluid }} />
        </MediaLink>
        <Typography variant="body1">{artist.title.toUpperCase()}</Typography>
    </Grid>
)
