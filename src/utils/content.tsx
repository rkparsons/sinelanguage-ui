import { Artist, Event, Release, Track, Video } from '~/cms/types'

import { ContentType } from '~/constants/contentType'
import React from 'react'
import ReleaseThumbnail from '~/components/ReleaseThumbnail'
import VideoThumbnail from '~/components/VideoThumbnail'

export const sort = (contents: (Release | Video)[]) =>
    contents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const getThumbnailComponent = (content: Release | Video, index: number) =>
    content.__typename === ContentType.RELEASE ? (
        <ReleaseThumbnail release={content as Release} index={index} />
    ) : content.__typename === ContentType.VIDEO ? (
        <VideoThumbnail video={content as Video} index={index} />
    ) : (
        <></>
    )

export const getUrl = (content: Release | Video | Artist | Event) => {
    const slug = content.uid.toLowerCase()
    return content.__typename === ContentType.RELEASE
        ? `/releases/${slug}`
        : content.__typename === ContentType.VIDEO
        ? `/releases/video/${slug}`
        : content.__typename === ContentType.ARTIST
        ? `/artists/${slug}`
        : content.__typename === ContentType.EVENT
        ? `/events/${slug}`
        : ''
}
