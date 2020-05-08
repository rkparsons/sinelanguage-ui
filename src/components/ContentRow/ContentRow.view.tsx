import { Artist, Event, Podcast, Release, Video } from '~/cms/types'

import ArtistRow from '~/components/ArtistRow'
import { ContentItem } from '~/types/cms'
import { ContentType } from '~/constants/contentType'
import EventRow from '~/components/EventRow'
import PodcastRow from '~/components/PodcastRow'
import React from 'react'
import ReleaseRow from '~/components/ReleaseRow'

type ViewProps = {
    content: ContentItem
}

export default ({ content }: ViewProps) => {
    const components: Record<string, JSX.Element> = {
        [ContentType.ARTIST]: <ArtistRow artist={content as Artist} />,
        [ContentType.EVENT]: <EventRow event={content as Event} />,
        [ContentType.PODCAST]: <PodcastRow podcast={content as Podcast} />,
        [ContentType.RELEASE]: (
            <ReleaseRow release={content as Release} format={(content as Release).format} />
        ),
        // todo: add format constant to video
        [ContentType.VIDEO]: <ReleaseRow release={content as Video} format="Video" />,
    }

    return components[content.__typename]
}
