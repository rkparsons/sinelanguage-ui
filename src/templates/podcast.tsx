import Centered from '~/components/Centered'
import { Grid } from '@material-ui/core'
import Head from '~/components/Head'
import Image from 'gatsby-image'
import Overlay from '~/components/Overlay'
import { Podcast } from '~/cms/types'
import PodcastDetail from '~/components/PodcastDetail'
import React from 'react'
import Scrollable from '~/components/Scrollable'
import SideMargins from '~/components/SideMargins'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulPodcast: Podcast
    }
}

export default ({ data }: Props) => {
    const { title, description, image } = data.contentfulPodcast

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
                            <SideMargins>
                                <PodcastDetail podcast={data.contentfulPodcast} />
                            </SideMargins>
                        </Scrollable>
                    </Grid>
                </Grid>
            </Overlay>
        </>
    )
}

export const query = graphql`
    query($uid: String!) {
        contentfulPodcast(uid: { eq: $uid }) {
            ...podcastFragment
        }
    }
`
