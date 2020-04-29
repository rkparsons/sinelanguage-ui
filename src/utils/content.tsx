import { Artist, Event, Podcast, Release, Track, Video } from '~/cms/types'

import ArtistRow from '~/components/ArtistRow'
import { ContentItem } from '~/types/cms'
import { ContentType } from '~/constants/contentType'
import EventRow from '~/components/EventRow'
import PodcastRow from '~/components/PodcastRow'
import React from 'react'
import ReleaseRow from '~/components/ReleaseRow'
import ReleaseThumbnail from '~/components/ReleaseThumbnail'
import VideoRow from '~/components/VideoRow'
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

export const getListComponent = (content: ContentItem) =>
    content.__typename === ContentType.RELEASE ? (
        <ReleaseRow release={content as Release} />
    ) : content.__typename === ContentType.VIDEO ? (
        <VideoRow video={content as Video} />
    ) : content.__typename === ContentType.ARTIST ? (
        <ArtistRow artist={content as Artist} />
    ) : content.__typename === ContentType.EVENT ? (
        <EventRow event={content as Event} />
    ) : content.__typename === ContentType.PODCAST ? (
        <PodcastRow podcast={content as Podcast} />
    ) : (
        ''
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
