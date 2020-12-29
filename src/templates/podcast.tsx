import { Box, Grid } from '@material-ui/core'

import ContentCardMedia from '~/components/ContentCardMedia'
import Desktop from '~/components/Desktop'
import Head from '~/components/Head'
import Mobile from '~/components/Mobile'
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
            <Head
                title={`${uid} - ${title}`}
                description={description.description}
                image={wideImage.file.url}
            />
            <Overlay>

                <Mobile>
                    <Grid container>
                        <Grid item xs={12}>
                            <Scrollable isWithMargin={true}>
                                <PodcastDetail podcast={data.contentfulPodcast} />
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
                                    <ContentCardMedia content={data.contentfulPodcast} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6}>
                            <Scrollable isWithMargin={true}>
                                <br />
                                <PodcastDetail podcast={data.contentfulPodcast} />
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
        contentfulPodcast(uid: { eq: $uid }) {
            ...podcastFragment
        }
    }
`
