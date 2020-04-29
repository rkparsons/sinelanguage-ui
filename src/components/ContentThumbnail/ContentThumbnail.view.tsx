import { Artist, Release, Video } from '~/cms/types'

import ArtistThumbnail from '~/components/ArtistThumbnail'
import { ContentItem } from '~/types/cms'
import { ContentType } from '~/constants/contentType'
import React from 'react'
import ReleaseThumbnail from '~/components/ReleaseThumbnail'
import VideoThumbnail from '~/components/VideoThumbnail'

type ViewProps = {
    content: ContentItem
    index: number
}

export default ({ content, index }: ViewProps) => {
    const components: Record<string, JSX.Element> = {
        [ContentType.ARTIST]: <ArtistThumbnail artist={content as Artist} index={index} />,
        [ContentType.RELEASE]: <ReleaseThumbnail release={content as Release} index={index} />,
        [ContentType.VIDEO]: <VideoThumbnail video={content as Video} index={index} />,
    }

    return components[content.__typename]
}
