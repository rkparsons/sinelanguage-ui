import { Grid, Typography } from '@material-ui/core'

import Image from 'gatsby-image'
import MediaLink from '~/components/MediaLink'
import { Podcast } from '~/cms/types'
import React from 'react'
import ThumbnailText from '~/components/ThumbnailText'
import { getUrl } from '~/utils/content'

type ViewProps = {
    podcast: Podcast
}

export default ({ podcast }: ViewProps) => (
    <Grid item xs={6} sm={4} lg={3}>
        <MediaLink url={getUrl(podcast)}>
            <Image title={podcast.title} alt={podcast.title} sizes={{ ...podcast.image.fluid }} />
        </MediaLink>
        <ThumbnailText>
            <Typography variant="body1">
                <i>{podcast.uid}</i>
            </Typography>
        </ThumbnailText>
        <br />
    </Grid>
)
