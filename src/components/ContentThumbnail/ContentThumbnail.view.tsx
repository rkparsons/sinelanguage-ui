import { Artist, Podcast, Release, Video } from '~/cms/types'

import ArtistThumbnail from '~/components/ArtistThumbnail'
import { ContentItem } from '~/types/cms'
import { ContentType } from '~/constants/contentType'
import PodcastThumbnail from '~/components/PodcastThumbnail'
import React from 'react'
import ReleaseThumbnail from '~/components/ReleaseThumbnail'
import VideoThumbnail from '~/components/VideoThumbnail'

type ViewProps = {
    content: ContentItem
}

export default ({ content }: ViewProps) => {
    const components: Record<string, JSX.Element> = {
        [ContentType.ARTIST]: <ArtistThumbnail artist={content as Artist} />,
        [ContentType.RELEASE]: <ReleaseThumbnail release={content as Release} />,
        [ContentType.VIDEO]: <VideoThumbnail video={content as Video} />,
        [ContentType.PODCAST]: <PodcastThumbnail podcast={content as Podcast} />,
    }

    return components[content.__typename]
}
