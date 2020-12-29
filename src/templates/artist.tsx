import { Artist, Release, Video } from '~/cms/types'
import { Box, Grid } from '@material-ui/core'

import ArtistDetail from '~/components/ArtistDetail'
import ContentCardMedia from '~/components/ContentCardMedia'
import Desktop from '~/components/Desktop'
import Head from '~/components/Head'
import Mobile from '~/components/Mobile'
import Overlay from '~/components/Overlay'
import React from 'react'
import Scrollable from '~/components/Scrollable'
import { detailImageSize } from '~/styles/sizes'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulArtist: Artist & { release?: Release[]; video?: Video[] }
    }
}

export default ({ data }: Props) => {
    const { title, description, image } = data.contentfulArtist

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <Overlay>
                
                <Mobile>
                    <Grid container>
                        <Grid item xs={12}>
                            <Scrollable isWithMargin={true}>
                                <ArtistDetail
                                    artist={data.contentfulArtist}
                                    releases={data.contentfulArtist.release || []}
                                    videos={data.contentfulArtist.video || []}
                                />
                            </Scrollable>
                        </Grid>
                    </Grid> 
                </Mobile>

                <Desktop>
                    <Grid container>
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

                        <Grid item md={6}>
                            <Scrollable isWithMargin={true}>
                                <br />
                                <ArtistDetail
                                    artist={data.contentfulArtist}
                                    releases={data.contentfulArtist.release || []}
                                    videos={data.contentfulArtist.video || []}
                                />
                            </Scrollable>
                        </Grid>
                    </Grid> 
                </Desktop>

            </Overlay>
        </>
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
