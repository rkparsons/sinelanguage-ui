import { ContentItem } from '~/types/cms'
import Image from 'gatsby-image'
import React from 'react'
import TeaserVideo from '~/components/TeaserVideo'

type ViewProps = {
    content: ContentItem
}

export default ({ content }: ViewProps) =>
    'teaserVideo' in content ? (
        <TeaserVideo src={content.teaserVideo.file.url} />
    ) : (
        <Image title={content.title} alt={content.title} sizes={{ ...content.image.fluid }} />
    )
