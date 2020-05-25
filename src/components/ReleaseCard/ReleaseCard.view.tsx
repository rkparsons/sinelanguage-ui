import { Box, Grid, Typography } from '@material-ui/core'

import Column from '~/components/Column'
import ContentCardDetail from '~/components/ContentCardDetail'
import ContentCardMedia from '~/components/ContentCardMedia'
import ContentPlayButton from '~/components/ContentPlayButton'
import MediaLink from '~/components/MediaLink'
import ProductMenu from '~/components/ProductMenu'
import React from 'react'
import { Release } from '~/cms/types'
import { getUrl } from '~/utils/content'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => {
    const { title, artist, products } = release

    return (
        <Column widthMultiplier={1}>
            <MediaLink url={getUrl(release)}>
                <ContentCardMedia content={release} />
            </MediaLink>
            <ContentCardDetail>
                <Typography>
                    {(release.originalArtist || artist.title).toUpperCase()}, <i>{title}</i>
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={1}></Grid>
                    <Grid item>
                        <Box paddingRight={2}>
                            <ContentPlayButton
                                content={release}
                                trackIndex={0}
                                isLarge={false}
                                isLight={false}
                                text="PLAY"
                            />
                        </Box>
                    </Grid>
                    {products && (
                        <Grid item>
                            <ProductMenu
                                release={release}
                                products={release.products}
                                isLight={false}
                                isLarge={false}
                                text="BUY"
                                indicateWhenInBag={false}
                            />
                        </Grid>
                    )}
                </Grid>
            </ContentCardDetail>
        </Column>
    )
}
