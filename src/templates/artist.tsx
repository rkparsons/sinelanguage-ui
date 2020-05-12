import { Artist, Release, Video } from '~/cms/types'
import { Box, Grid, Hidden, Typography } from '@material-ui/core'

import ArtistDetail from '~/components/ArtistDetail'
import Centered from '~/components/Centered'
import ContentThumbnail from '~/components/ContentThumbnail'
import Head from '~/components/Head'
import Image from 'gatsby-image'
import Overlay from '~/components/Overlay'
import React from 'react'
import Scrollable from '~/components/Scrollable'
import { graphql } from 'gatsby'
import { sortByDate } from '~/utils/content'

type Props = {
    data: {
        contentfulArtist: Artist & { release?: Release[]; video?: Video[] }
    }
}

export default ({ data }: Props) => {
    const { title, description, image } = data.contentfulArtist
    const relatedContentComponents = sortByDate([
        ...(data.contentfulArtist.release || []),
        ...(data.contentfulArtist.video || []),
    ]).map((relatedContent, index) => <ContentThumbnail content={relatedContent} key={index} />)

    return (
        <Overlay>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <Grid container>
                <Hidden mdDown>
                    <Grid item xs={6}>
                        <Centered size={7}>
                            <Image title={title} alt={title} sizes={{ ...image.fluid }} />
                        </Centered>
                    </Grid>
                </Hidden>
                <Grid item xs={12} lg={6}>
                    <Scrollable isWithMargin={true}>
                        <ArtistDetail artist={data.contentfulArtist} />
                        <Typography variant="h3">RELEASES</Typography>
                        <br />
                        <Grid container>{relatedContentComponents}</Grid>
                    </Scrollable>
                </Grid>
            </Grid>
        </Overlay>
    )
}

export const query = graphql`
    query($uid: String!) {
        contentfulArtist(uid: { eq: $uid }) {
            ...artistFragment
            release {
                ...releaseFragment
            }
            video {
                ...videoFragment
            }
        }
    }
`
