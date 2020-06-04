import { Box, Grid, Typography } from '@material-ui/core'

import MediaLink from '~/components/MediaLink'
import React from 'react'
import TeaserVideo from '~/components/TeaserVideo'
import ThumbnailText from '~/components/ThumbnailText'
import { Video } from '~/cms/types'
import { getUrl } from '~/utils/content'

type ViewProps = {
    video: Video
}

export default ({ video }: ViewProps) => (
    <Grid item xs={12} sm={8} lg={6}>
        <MediaLink url={getUrl(video)}>
            <TeaserVideo src={video.teaserVideo.file.url} />
        </MediaLink>
        <ThumbnailText>
            <Typography variant="body1">
                <i>{video.title}</i>
            </Typography>
        </ThumbnailText>
        <br />
    </Grid>
)
