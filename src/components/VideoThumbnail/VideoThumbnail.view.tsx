import { Grid, Typography } from '@material-ui/core'

import Image from 'gatsby-image'
import MediaLink from '~/components/MediaLink'
import React from 'react'
import TeaserVideo from '~/components/TeaserVideo'
import { Video } from '~/cms/types'
import { getUrl } from '~/utils/content'
import moment from 'moment'

type ViewProps = {
    video: Video
}

export default ({ video }: ViewProps) => (
    <Grid item xs={8} sm={6} md={4} lg={6}>
        <MediaLink url={getUrl(video)}>
            <TeaserVideo src={video.teaserVideo.file.url} />
        </MediaLink>
        <Typography variant="body1">
            <i>{video.title}</i>
        </Typography>
        <Typography variant="body1">{moment(video.date).format('MMM. DD, YYYY')}</Typography>
        <br />
    </Grid>
)
