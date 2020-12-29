import { Box, Grid } from '@material-ui/core'

import ContentCardMedia from '~/components/ContentCardMedia'
import Desktop from '~/components/Desktop'
import { Event } from '~/cms/types'
import EventDetail from '~/components/EventDetail'
import Head from '~/components/Head'
import Mobile from '~/components/Mobile'
import Overlay from '~/components/Overlay'
import React from 'react'
import Scrollable from '~/components/Scrollable'
import { detailImageSize } from '~/styles/sizes'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulEvent: Event
    }
}

export default ({ data }: Props) => {
    const { title, description, image, teaserVideo } = data.contentfulEvent

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <Overlay>

                <Mobile>
                    <Grid container>
                        <Grid item xs={12}>
                            <Scrollable isWithMargin={true}>
                                <EventDetail event={data.contentfulEvent} />
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
                                    <ContentCardMedia content={data.contentfulEvent} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Scrollable isWithMargin={true}>
                                <br />
                                <EventDetail event={data.contentfulEvent} />
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
        contentfulEvent(uid: { eq: $uid }) {
            ...eventFragment
        }
    }
`
