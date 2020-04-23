import { ArtistDetail, ArtistImage } from './Detail.style'
import { Grid, Typography } from '@material-ui/core'

import { Artist } from '~/cms/types'
import Head from '~/components/Head'
import React from 'react'
import RichText from '~/components/RichText'
import SocialLink from '~/components/SocialLink'
import SquareImage from '~/components/SquareImage'

type ViewProps = {
    artist: Artist
}

export default ({ artist }: ViewProps) => {
    const { title, description, image, bio, socials } = artist

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <ArtistDetail container>
                <Grid item xs={6}>
                    <ArtistImage container justify="center" alignItems="center">
                        <Grid item xs={8}>
                            <SquareImage title={title} image={image} />
                        </Grid>
                    </ArtistImage>
                </Grid>
                <Grid item xs={6}>
                    <RichText json={bio.json} />
                    <Typography variant="h3">
                        {socials.map((url) => (
                            <SocialLink url={url} />
                        ))}
                    </Typography>
                </Grid>
            </ArtistDetail>
        </>
    )
}
