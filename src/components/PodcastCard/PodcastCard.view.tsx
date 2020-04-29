import Column from '~/components/Column'
import ContentCardDetail from '~/components/ContentCardDetail'
import ContentCardMedia from '~/components/ContentCardMedia'
import MediaLink from '~/components/MediaLink'
import { Podcast } from '~/cms/types'
import React from 'react'
import { Typography } from '@material-ui/core'
import { getUrl } from '~/utils/content'

type ViewProps = {
    podcast: Podcast
}

export default ({ podcast }: ViewProps) => {
    return (
        <Column widthMultiplier={1}>
            <MediaLink url={getUrl(podcast)}>
                <ContentCardMedia contentItem={podcast} />
            </MediaLink>
            <ContentCardDetail>
                <Typography variant="body1">{podcast.title.toUpperCase()}, Podcast</Typography>
                <Typography variant="body1">[{podcast.uid}]</Typography>
            </ContentCardDetail>
        </Column>
    )
}
