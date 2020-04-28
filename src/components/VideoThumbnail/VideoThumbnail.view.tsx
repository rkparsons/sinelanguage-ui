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
    index: number
}

export default ({ video, index }: ViewProps) => (
    <Grid item xs={6} key={index}>
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
