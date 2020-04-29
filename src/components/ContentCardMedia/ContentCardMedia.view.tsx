import { Event, Video } from '~/cms/types'

import { ContentItem } from '~/types/cms'
import { ContentType } from '~/constants/contentType'
import Image from 'gatsby-image'
import React from 'react'
import TeaserVideo from '~/components/TeaserVideo'

type ViewProps = {
    contentItem: ContentItem
}

export default ({ contentItem }: ViewProps) =>
    [`${ContentType.EVENT}`, `${ContentType.VIDEO}`].includes(contentItem.__typename) ? (
        <TeaserVideo src={(contentItem as Event | Video).teaserVideo.file.url} />
    ) : (
        <Image
            title={contentItem.title}
            alt={contentItem.title}
            sizes={{ ...contentItem.image.fluid }}
        />
    )
