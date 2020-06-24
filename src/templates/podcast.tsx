import { Box, Grid, Hidden } from '@material-ui/core'

import ContentCardMedia from '~/components/ContentCardMedia'
import Desktop from '~/components/Desktop'
import Head from '~/components/Head'
import Overlay from '~/components/Overlay'
import { Podcast } from '~/cms/types'
import PodcastDetail from '~/components/PodcastDetail'
import React from 'react'
import Scrollable from '~/components/Scrollable'
import { detailImageSize } from '~/styles/sizes'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulPodcast: Podcast
    }
}

export default ({ data }: Props) => {
    const { uid, title, description, wideImage } = data.contentfulPodcast

    return (
        <>
            <Head title={title} description={description.description} image={wideImage.file.url} />
            <Overlay>
                <Grid container>
                    <Desktop>
                        <Grid item xs={6}>
                            <Box
                                display="flex"
                                width="100%"
                                height="100%"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Box width={`${detailImageSize}vh`} maxWidth="80%">
                                    <ContentCardMedia content={data.contentfulPodcast} />
                                </Box>
                            </Box>
                        </Grid>
                    </Desktop>
                    <Grid item xs={12} md={6}>
                        <Scrollable isWithMargin={true}>
                            <Hidden lgDown>
                                <br />
                            </Hidden>
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
