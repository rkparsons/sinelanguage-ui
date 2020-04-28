import { Grid, Typography } from '@material-ui/core'

import { Artist } from '~/cms/types'
import BagIcon from '~/components/BagIcon'
import ContentCard from '~/components/ContentCard'
import ContentCardDetail from '~/components/ContentCardDetail'
import { ContentItem } from '~/types/cms'
import { ContentModel } from '~/models/ContentModel'
import ContentPlayButton from '~/components/ContentPlayButton'
import IconButton from '~/components/IconButton'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import MediaLink from '~/components/MediaLink'
import { PlayArrow } from '@material-ui/icons'
import React from 'react'
import { getUrl } from '~/utils/content'

type ViewProps = {
    artist: Artist
}

export default ({ artist }: ViewProps) => {
    return (
        <ContentCard widthMultiplier={1}>
            <MediaLink url={getUrl(artist)}>
                <Image title={artist.title} alt={artist.title} sizes={{ ...artist.image.fluid }} />
            </MediaLink>
            <ContentCardDetail>
                <Typography>{artist.title.toUpperCase()}</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={1}></Grid>
                    <Grid item>
                        <ContentPlayButton content={artist} />
                    </Grid>
                    <Grid item>
                        <IconButton
                            label={<Typography variant="body1">BUY</Typography>}
                            icon={<BagIcon />}
                            onClick={() => console.log('buy')}
                        />
                    </Grid>
                </Grid>
            </ContentCardDetail>
        </ContentCard>
    )
}
