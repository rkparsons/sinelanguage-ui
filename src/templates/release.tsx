import { Artist, Release, Video } from '~/cms/types'
import { Box, Grid } from '@material-ui/core'

import ContentCardMedia from '~/components/ContentCardMedia'
import Desktop from '~/components/Desktop'
import Head from '~/components/Head'
import Mobile from '~/components/Mobile'
import Overlay from '~/components/Overlay'
import React from 'react'
import ReleaseDetail from '~/components/ReleaseDetail'
import Scrollable from '~/components/Scrollable'
import { detailImageSize } from '~/styles/sizes'
import { graphql } from 'gatsby'
import { sortByDate } from '~/utils/content'

type Props = {
    data: {
        contentfulRelease: Release & { artist: Artist & { release?: Release[]; video?: Video[] } }
    }
}

export default ({ data }: Props) => {
    const { __typename, uid, title, description, image, artist } = data.contentfulRelease

    const relatedReleases = sortByDate([
        ...(data.contentfulRelease.artist.release || []),
        ...(data.contentfulRelease.artist.video || []),
    ]).filter(
        (relatedContent) => relatedContent.__typename !== __typename || relatedContent.uid !== uid
    )

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <Overlay>

                <Mobile>
                    <Grid container>
                        <Grid item xs={12}>
                            <Scrollable isWithMargin={true}>
                                <ReleaseDetail
                                    release={data.contentfulRelease}
                                    relatedReleases={relatedReleases}
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
                                    <ContentCardMedia content={data.contentfulRelease} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6}>
                            <Scrollable isWithMargin={true}>
                                <br />
                                <ReleaseDetail
                                    release={data.contentfulRelease}
                                    relatedReleases={relatedReleases}
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
        contentfulRelease(uid: { eq: $uid }) {
            ...releaseFragment
            artist {
                release {
                    ...releaseFragment
                }
                video {
                    ...videoFragment
                }
            }
        }
    }
`
