import { Release, Video } from '~/cms/types'

import { ContentItem } from '~/types/cms'
import { ContentType } from '~/constants/contentType'
import React from 'react'
import ReleaseThumbnail from '~/components/ReleaseThumbnail'
import VideoThumbnail from '~/components/VideoThumbnail'

export const sort = (contents: ContentItem[]) =>
    contents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const getHoverSize = (content: ContentItem) =>
    content.__typename === ContentType.VIDEO ? 12 : 5

export const getThumbnailComponent = (content: ContentItem, index: number) =>
    content.__typename === ContentType.RELEASE ? (
        <ReleaseThumbnail release={content as Release} index={index} />
    ) : content.__typename === ContentType.VIDEO ? (
        <VideoThumbnail video={content as Video} index={index} />
    ) : (
        <></>
    )

export const getUrl = (content: ContentItem) => {
    const slug = content.uid.toLowerCase()
    return content.__typename === ContentType.RELEASE
        ? `/releases/${slug}`
        : content.__typename === ContentType.VIDEO
        ? `/releases/video/${slug}`
        : content.__typename === ContentType.ARTIST
        ? `/artists/${slug}`
        : content.__typename === ContentType.EVENT
        ? `/events/${slug}`
        : content.__typename === ContentType.PODCAST
        ? `/podcasts/${slug}`
        : ''
}
