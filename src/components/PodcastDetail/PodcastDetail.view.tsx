import { Box, Grid, Hidden, Typography } from '@material-ui/core'

import ContentPlayButton from '~/components/ContentPlayButton'
import Image from 'gatsby-image'
import { Podcast } from '~/cms/types'
import React from 'react'
import RichText from '~/components/RichText'

type ViewProps = {
    podcast: Podcast
}

export default ({ podcast }: ViewProps) => {
    const { title, introduction, image } = podcast
    return (
        <>
            <Grid container spacing={5}>
                <Grid item>
                    <Box display="flex" alignItems="center" height="100%">
                        <Typography variant="h3">{title.toUpperCase()}</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <ContentPlayButton
                        content={podcast}
                        trackIndex={0}
                        isLight={true}
                        text="PLAY"
                    />
                </Grid>
            </Grid>

            <Hidden lgUp>
                <br />
                <Grid container>
                    <Grid item xs={12} sm={8} md={6}>
                        <Image title={title} alt={title} sizes={{ ...image.fluid }} />
                    </Grid>
                </Grid>
            </Hidden>

            <br />
            <RichText json={introduction.json} variant="body2" />
        </>
    )
}
