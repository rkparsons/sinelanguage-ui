import { Box, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'

import FullSizeGrid from '~/components/FullSizeGrid'
import Head from '~/components/Head'
import Overlay from '~/components/Overlay'
import Scrollable from '~/components/Scrollable'
import { Video } from '~/cms/types'
import YouTubeEmbed from '~/components/YouTubeEmbed'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulVideo: Video
    }
}

export default ({ data }: Props) => {
    const { title, credits, description, image, artist, srcURL } = data.contentfulVideo

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <Overlay>
                <Scrollable isWithMargin={false}>
                    <FullSizeGrid justify="center">
                        <Grid item xs={12} sm={11} md={10} lg={8} xl={7}>
                            <YouTubeEmbed artist={artist.title} title={title} src={srcURL} />
                        </Grid>
                        <Grid item xs={12}>
                            <br />
                            <Typography variant="h5" align="center">
                                {artist.title}, <i>{title}</i>
                            </Typography>
                            <Typography variant="h5" align="center">
                                {credits.credits}
                            </Typography>
                        </Grid>
                    </FullSizeGrid>
                </Scrollable>
            </Overlay>
        </>
    )
}

export const query = graphql`
    query($uid: String!) {
        contentfulVideo(uid: { eq: $uid }) {
            ...videoFragment
        }
    }
`
