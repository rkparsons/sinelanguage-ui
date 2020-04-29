import ContentCard from '~/components/ContentCard'
import ContentCardDetail from '~/components/ContentCardDetail'
import ContentCardMedia from '~/components/ContentCardMedia'
import MediaLink from '~/components/MediaLink'
import React from 'react'
import { Typography } from '@material-ui/core'
import { Video } from '~/cms/types'
import { getUrl } from '~/utils/content'

type ViewProps = {
    video: Video
}

export default ({ video }: ViewProps) => {
    return (
        <ContentCard widthMultiplier={2}>
            <MediaLink url={getUrl(video)}>
                <ContentCardMedia contentItem={video} />
            </MediaLink>
            <ContentCardDetail>
                <Typography variant="body1">
                    {video.artist.title.toUpperCase()}, <i>{video.title}</i>, Video
                </Typography>
                <Typography variant="body1">[{video.uid}]</Typography>
            </ContentCardDetail>
        </ContentCard>
    )
}
