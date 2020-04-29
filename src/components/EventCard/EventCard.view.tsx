import ContentCard from '~/components/ContentCard'
import ContentCardDetail from '~/components/ContentCardDetail'
import ContentCardMedia from '~/components/ContentCardMedia'
import { Event } from '~/cms/types'
import MediaLink from '~/components/MediaLink'
import React from 'react'
import { Typography } from '@material-ui/core'
import { getUrl } from '~/utils/content'

type ViewProps = {
    event: Event
}

export default ({ event }: ViewProps) => {
    return (
        <ContentCard widthMultiplier={1}>
            <MediaLink url={getUrl(event)}>
                <ContentCardMedia contentItem={event} />
            </MediaLink>
            <ContentCardDetail>
                <Typography>{event.title.toUpperCase()}</Typography>
            </ContentCardDetail>
        </ContentCard>
    )
}
