import { Artist, Release, Video } from '~/cms/types'
import { Box, Grid, Hidden, withWidth } from '@material-ui/core'

import ArtistDetail from '~/components/ArtistDetail'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import ContentCardMedia from '~/components/ContentCardMedia'
import Head from '~/components/Head'
import Overlay from '~/components/Overlay'
import React from 'react'
import Scrollable from '~/components/Scrollable'
import { detailImageSize } from '~/styles/sizes'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulArtist: Artist & { release?: Release[]; video?: Video[] }
    }
    width: Breakpoint
}

export default withWidth()(({ data, width }: Props) => {
    const { title, description, image } = data.contentfulArtist
    const isDesktop = !['xs', 'sm'].includes(width)

    return (
        <Overlay>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <Grid container>
                {isDesktop && (
                    <Grid item md={6}>
                        <Box
                            display="flex"
                            width="100%"
                            height="100%"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box width={`${detailImageSize}vh`} maxWidth="80%">
                                <ContentCardMedia content={data.contentfulArtist} />
                            </Box>
                        </Box>
                    </Grid>
                )}

                <Grid item xs={12} md={6}>
                    <Scrollable isWithMargin={true}>
                        <Hidden lgDown>
                            <br />
                        </Hidden>
                        <ArtistDetail
                            artist={data.contentfulArtist}
                            releases={data.contentfulArtist.release || []}
                            videos={data.contentfulArtist.video || []}
                        />
                    </Scrollable>
                </Grid>
            </Grid>
        </Overlay>
    )
})

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
