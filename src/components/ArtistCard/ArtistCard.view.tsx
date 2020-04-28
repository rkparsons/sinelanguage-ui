import { Grid, Typography } from '@material-ui/core'
import { getCardMedia, getUrl } from '~/utils/content'

import { Artist } from '~/cms/types'
import BagIcon from '~/components/BagIcon'
import ContentCard from '~/components/ContentCard'
import ContentCardDetail from '~/components/ContentCardDetail'
import ContentPlayButton from '~/components/ContentPlayButton'
import IconButton from '~/components/IconButton'
import Image from 'gatsby-image'
import MediaLink from '~/components/MediaLink'
import React from 'react'

type ViewProps = {
    artist: Artist
}

export default ({ artist }: ViewProps) => {
    return (
        <ContentCard widthMultiplier={1}>
            <MediaLink url={getUrl(artist)}>{getCardMedia(artist)}</MediaLink>
            <ContentCardDetail>
                <Typography>{artist.title.toUpperCase()}</Typography>
            </ContentCardDetail>
        </ContentCard>
    )
}
