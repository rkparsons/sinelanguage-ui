import { getCardMedia, getUrl } from '~/utils/content'

import ContentCard from '~/components/ContentCard'
import ContentCardDetail from '~/components/ContentCardDetail'
import MediaLink from '~/components/MediaLink'
import { Podcast } from '~/cms/types'
import React from 'react'
import { Typography } from '@material-ui/core'

type ViewProps = {
    podcast: Podcast
}

export default ({ podcast }: ViewProps) => {
    return (
        <ContentCard widthMultiplier={1}>
            <MediaLink url={getUrl(podcast)}>{getCardMedia(podcast)}</MediaLink>
            <ContentCardDetail>
                <Typography variant="body1">{podcast.title.toUpperCase()}, Podcast</Typography>
                <Typography variant="body1">[{podcast.uid}]</Typography>
            </ContentCardDetail>
        </ContentCard>
    )
}
