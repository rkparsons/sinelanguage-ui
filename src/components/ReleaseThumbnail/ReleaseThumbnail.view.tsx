import { Grid, Typography } from '@material-ui/core'

import Image from 'gatsby-image'
import MediaLink from '~/components/MediaLink'
import React from 'react'
import { Release } from '~/cms/types'
import ThumbnailText from '~/components/ThumbnailText'
import { getUrl } from '~/utils/content'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => (
    <Grid item xs={6} sm={4} lg={3}>
        <MediaLink url={getUrl(release)}>
            <Image title={release.title} alt={release.title} sizes={{ ...release.image.fluid }} />
        </MediaLink>
        <ThumbnailText>
            <Typography variant="body1">
                <i>{release.title}</i>
            </Typography>
        </ThumbnailText>
        <br />
    </Grid>
)
