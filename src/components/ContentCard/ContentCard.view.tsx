import { Artist, Event, Podcast, Release, Video } from '~/cms/types'

import ArtistCard from '~/components/ArtistCard'
import { ContentItem } from '~/types/cms'
import { ContentType } from '~/constants/contentType'
import EventCard from '~/components/EventCard'
import PodcastCard from '~/components/PodcastCard'
import React from 'react'
import ReleaseCard from '~/components/ReleaseCard'
import VideoCard from '~/components/VideoCard'

type ViewProps = {
    content: ContentItem
}

export default ({ content }: ViewProps) => {
    const components: Record<string, JSX.Element> = {
        [ContentType.ARTIST]: <ArtistCard artist={content as Artist} />,
        [ContentType.EVENT]: <EventCard event={content as Event} />,
        [ContentType.PODCAST]: <PodcastCard podcast={content as Podcast} />,
        [ContentType.RELEASE]: <ReleaseCard release={content as Release} />,
        [ContentType.VIDEO]: <VideoCard video={content as Video} />,
    }

    return components[content.__typename]
}
