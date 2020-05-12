import { Grid, Typography } from '@material-ui/core'

import Image from 'gatsby-image'
import MediaLink from '~/components/MediaLink'
import React from 'react'
import { Release } from '~/cms/types'
import { getUrl } from '~/utils/content'
import moment from 'moment'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => (
    <Grid item xs={4} sm={3} md={2} lg={3}>
        <MediaLink url={getUrl(release)}>
            <Image title={release.title} alt={release.title} sizes={{ ...release.image.fluid }} />
        </MediaLink>
        <Typography variant="body1">
            <i>{release.title}</i>
        </Typography>
        <Typography variant="body1">{moment(release.date).format('MMM. DD, YYYY')}</Typography>
        <br />
    </Grid>
)
