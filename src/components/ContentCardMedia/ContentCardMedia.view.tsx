import { Event, Video } from '~/cms/types'

import { ContentItem } from '~/types/cms'
import { ContentType } from '~/constants/contentType'
import Image from 'gatsby-image'
import React from 'react'
import TeaserVideo from '~/components/TeaserVideo'

type ViewProps = {
    content: ContentItem
}

export default ({ content }: ViewProps) =>
    [`${ContentType.EVENT}`, `${ContentType.VIDEO}`].includes(content.__typename) ? (
        <TeaserVideo src={(content as Event | Video).teaserVideo.file.url} />
    ) : (
        <Image title={content.title} alt={content.title} sizes={{ ...content.image.fluid }} />
    )
