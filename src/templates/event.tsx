import { Box, Grid, Hidden } from '@material-ui/core'

import ContentCardMedia from '~/components/ContentCardMedia'
import { Event } from '~/cms/types'
import EventDetail from '~/components/EventDetail'
import Head from '~/components/Head'
import Overlay from '~/components/Overlay'
import React from 'react'
import ResponsiveGrid from '~/components/ResponsiveGrid'
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
                <Grid container>
                <ResponsiveGrid item md={6} isDesktop={true}>
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
                </ResponsiveGrid>
                    <Grid item xs={12} md={6}>
                        <Scrollable isWithMargin={true}>
                            <Hidden lgDown>
                                <br />
                            </Hidden>
                            <EventDetail event={data.contentfulEvent} />
                        </Scrollable>
                    </Grid>
                </Grid>
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
