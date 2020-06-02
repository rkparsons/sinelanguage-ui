import { Box, Grid, Hidden, Typography } from '@material-ui/core'

import { Artist } from '~/cms/types'
import ContentPlayButton from '~/components/ContentPlayButton'
import Image from 'gatsby-image'
import React from 'react'
import RichText from '~/components/RichText'
import Socials from '~/components/Socials'
import { maxContentWidth } from '~/styles/sizes'

type ViewProps = {
    artist: Artist
    releases: JSX.Element[]
}

export default ({ artist, releases }: ViewProps) => {
    const { title, image, socials, bio } = artist

    return (
        <Box maxWidth={`${maxContentWidth}rem`}>
            <Grid container spacing={5}>
                <Grid item>
                    <Box display="flex" alignItems="center" height="100%">
                        <Typography variant="h3">{title.toUpperCase()}</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <ContentPlayButton content={artist} trackIndex={0} isLight={true} text="PLAY" />
                </Grid>
            </Grid>

            <Hidden mdUp>
                <br />
                <Grid container>
                    <Grid item xs={12} sm={8}>
                        <Image title={title} alt={title} sizes={{ ...image.fluid }} />
                    </Grid>
                </Grid>

                <br />
            </Hidden>
            <Socials urls={socials} />
            <br />
            <RichText json={bio.json} variant="h3" />
            <br />
            <Typography variant="h3">RELEASES</Typography>
            <br />
            <Grid container>{releases}</Grid>
        </Box>
    )
}
