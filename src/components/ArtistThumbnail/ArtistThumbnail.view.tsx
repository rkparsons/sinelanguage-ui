import { Artist, Release } from '~/cms/types'
import { Box, Grid, Typography } from '@material-ui/core'

import Image from 'gatsby-image'
import MediaLink from '~/components/MediaLink'
import React from 'react'
import ThumbnailText from '~/components/ThumbnailText'
import { getUrl } from '~/utils/content'

type ViewProps = {
    artist: Artist
}

export default ({ artist }: ViewProps) => (
    <Grid item xs={6} sm={4} lg={3}>
        <MediaLink url={getUrl(artist)}>
            <Image title={artist.title} alt={artist.title} sizes={{ ...artist.image.fluid }} />
        </MediaLink>
        <ThumbnailText>
            <Typography variant="body1">{artist.title.toUpperCase()}</Typography>
        </ThumbnailText>
    </Grid>
)
