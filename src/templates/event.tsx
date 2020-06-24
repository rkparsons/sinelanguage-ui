import { Box, Grid, Hidden, withWidth } from '@material-ui/core'

import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import ContentCardMedia from '~/components/ContentCardMedia'
import { Event } from '~/cms/types'
import EventDetail from '~/components/EventDetail'
import Head from '~/components/Head'
import Overlay from '~/components/Overlay'
import React from 'react'
import Scrollable from '~/components/Scrollable'
import { detailImageSize } from '~/styles/sizes'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulEvent: Event
    }
    width: Breakpoint
}

export default withWidth()(({ data, width }: Props) => {
    const { title, description, image, teaserVideo } = data.contentfulEvent
    const isDesktop = !['xs', 'sm'].includes(width)

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <Overlay>
                <Grid container>
                    {isDesktop && (
                        <Grid item xs={6}>
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
                    )}
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
})

export const query = graphql`
    query($uid: String!) {
        contentfulEvent(uid: { eq: $uid }) {
            ...eventFragment
        }
    }
`
