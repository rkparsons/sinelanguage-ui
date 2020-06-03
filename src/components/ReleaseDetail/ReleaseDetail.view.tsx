import { Box, Grid, Hidden, Typography } from '@material-ui/core'

import { ContentItem } from '~/types/cms'
import ContentPlayButton from '~/components/ContentPlayButton'
import ContentThumbnail from '~/components/ContentThumbnail'
import Image from 'gatsby-image'
import React from 'react'
import { Release } from '~/cms/types'
import ReleaseProducts from '~/components/ReleaseProducts'
import ReleaseTracks from '~/components/ReleaseTracks'
import { maxContentWidth } from '~/styles/sizes'

type ViewProps = {
    release: Release
    relatedReleases: ContentItem[]
}

export default ({ release, relatedReleases }: ViewProps) => {
    const { artist, title, uid, format, image, tracks, products } = release

    return (
        <Box maxWidth={`${maxContentWidth}rem`}>
            <Typography variant="h3">
                {(release.originalArtist || artist.title).toUpperCase()}, <i>{title}</i>
            </Typography>
            <br />
            <Typography variant="h3">{uid}</Typography>
            <Typography variant="h3">{format}</Typography>
            <ContentPlayButton content={release} trackIndex={0} isLight={true} text="PLAY" />

            <br />
            <br />

            <Hidden mdUp>
                <Grid container>
                    <Grid item xs={12} sm={8} md={6}>
                        <Image title={title} alt={title} sizes={{ ...image.fluid }} />
                    </Grid>
                </Grid>

                <br />
            </Hidden>
            <br />

            <ReleaseTracks release={release} />
            <br />
            <br />

            <ReleaseProducts
                title="BUY"
                release={release}
                products={release.products}
                isLarge={true}
                isLight={true}
                isDescription={true}
            />

            <br />
            <br />
            <br />
            <Grid container>
                {release.products.map((product) =>
                    product.image ? (
                        <Grid item xs={4}>
                            <Image title={title} alt={title} sizes={{ ...product.image.fluid }} />
                        </Grid>
                    ) : (
                        <></>
                    )
                )}
            </Grid>
            <br />
            <br />
            <br />

            <Typography variant="h3">RELATED</Typography>
            <br />
            <Grid container>
                <ContentThumbnail content={artist} />
                {relatedReleases.map((relatedContent, index) => (
                    <ContentThumbnail content={relatedContent} key={index} />
                ))}
            </Grid>
        </Box>
    )
}
