import { Artist } from '~/cms/types'
import Column from '~/components/Column'
import ContentCardDetail from '~/components/ContentCardDetail'
import ContentCardMedia from '~/components/ContentCardMedia'
import MediaLink from '~/components/MediaLink'
import React from 'react'
import { Typography } from '@material-ui/core'
import { getUrl } from '~/utils/content'

type ViewProps = {
    artist: Artist
}

export default ({ artist }: ViewProps) => {
    return (
        <Column widthMultiplier={1}>
            <MediaLink url={getUrl(artist)}>
                <ContentCardMedia content={artist} />
            </MediaLink>
            <ContentCardDetail>
                <Typography>{artist.title}</Typography>
            </ContentCardDetail>
        </Column>
    )
}
