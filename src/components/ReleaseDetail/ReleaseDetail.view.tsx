import { Grid, Hidden, Typography } from '@material-ui/core'

import ContentPlayButton from '~/components/ContentPlayButton'
import Image from 'gatsby-image'
import React from 'react'
import { Release } from '~/cms/types'
import ReleaseProducts from '~/components/ReleaseProducts'
import ReleaseTracks from '~/components/ReleaseTracks'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => {
    const { artist, title, uid, format, image, tracks, products } = release

    return (
        <>
            <Typography variant="h3">
                {artist.title.toUpperCase()}, <i>{title}</i>
            </Typography>
            <br />
            <Typography variant="h3">[{uid}]</Typography>
            <Typography variant="h3">{format}</Typography>
            <ContentPlayButton content={release} trackIndex={0} isLight={true} text="PLAY" />

            <br />

            <Hidden lgUp>
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

            <ReleaseProducts
                title="BUY"
                release={release}
                products={release.products}
                isLarge={true}
                isLight={true}
            />
            <br />
        </>
    )
}
