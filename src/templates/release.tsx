import { Artist, Release, Video } from '~/cms/types'
import { Grid, Typography } from '@material-ui/core'
import { getThumbnailComponent, sort } from '~/utils/content'

import ArtistThumbnail from '~/components/ArtistThumbnail'
import Centered from '~/components/Centered'
import Head from '~/components/Head'
import Image from 'gatsby-image'
import Overlay from '~/components/Overlay'
import React from 'react'
import ReleaseDetail from '~/components/ReleaseDetail'
import Scrollable from '~/components/Scrollable'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulRelease: Release & { artist: Artist & { release: Release[]; video: Video[] } }
    }
}

export default ({ data }: Props) => {
    const { uid, title, description, image, artist } = data.contentfulRelease
    const relatedContentComponents = sort([
        ...data.contentfulRelease.artist.release,
        ...data.contentfulRelease.artist.video,
    ])
        .filter((x) => x.uid !== uid)
        .map(getThumbnailComponent)

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <Overlay>
                <Grid container>
                    <Grid item xs={6}>
                        <Centered size={7}>
                            <Image title={title} alt={title} sizes={{ ...image.fluid }} />
                        </Centered>
                    </Grid>
                    <Grid item xs={6}>
                        <Scrollable>
                            <ReleaseDetail release={data.contentfulRelease} />
                            <Grid container>
                                <ArtistThumbnail artist={artist} index={0} />
                            </Grid>
                            <Typography variant="h3">RELATED</Typography>
                            <br />
                            <Grid container>{relatedContentComponents}</Grid>
                        </Scrollable>
                    </Grid>
                </Grid>
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
