import { getCardMedia, getUrl } from '~/utils/content'

import ContentCard from '~/components/ContentCard'
import ContentCardDetail from '~/components/ContentCardDetail'
import { Event } from '~/cms/types'
import Image from 'gatsby-image'
import MediaLink from '~/components/MediaLink'
import React from 'react'
import { Typography } from '@material-ui/core'

type ViewProps = {
    event: Event
}

export default ({ event }: ViewProps) => {
    return (
        <ContentCard widthMultiplier={1}>
            <MediaLink url={getUrl(event)}>{getCardMedia(event)}</MediaLink>
            <ContentCardDetail>
                <Typography>{event.title.toUpperCase()}</Typography>
            </ContentCardDetail>
        </ContentCard>
    )
}
