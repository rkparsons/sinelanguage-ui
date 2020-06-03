import { Grid, Hidden } from '@material-ui/core'

import Centered from '~/components/Centered'
import ContentCardMedia from '~/components/ContentCardMedia'
import Head from '~/components/Head'
import Overlay from '~/components/Overlay'
import { Podcast } from '~/cms/types'
import PodcastDetail from '~/components/PodcastDetail'
import React from 'react'
import Scrollable from '~/components/Scrollable'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulPodcast: Podcast
    }
}

export default ({ data }: Props) => {
    const { uid, title, description, image } = data.contentfulPodcast

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <Overlay>
                <Grid container>
                    <Hidden smDown>
                        <Grid item xs={6}>
                            <Centered size={6}>
                                <ContentCardMedia content={data.contentfulPodcast} />
                            </Centered>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={6}>
                        <Scrollable isWithMargin={true}>
                            <PodcastDetail podcast={data.contentfulPodcast} />
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
