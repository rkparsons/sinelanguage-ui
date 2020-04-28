import { Grid, Typography } from '@material-ui/core'
import { getCardMedia, getUrl } from '~/utils/content'

import BagIcon from '~/components/BagIcon'
import ContentCard from '~/components/ContentCard'
import ContentCardDetail from '~/components/ContentCardDetail'
import ContentPlayButton from '~/components/ContentPlayButton'
import IconButton from '~/components/IconButton'
import Image from 'gatsby-image'
import MediaLink from '~/components/MediaLink'
import React from 'react'
import { Release } from '~/cms/types'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => {
    return (
        <ContentCard widthMultiplier={1}>
            <MediaLink url={getUrl(release)}>{getCardMedia(release)}</MediaLink>
            <ContentCardDetail>
                <Typography>
                    {release.artist.title.toUpperCase()}, <i>{release.title}</i>
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={1}></Grid>
                    <Grid item>
                        <ContentPlayButton content={release} />
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
