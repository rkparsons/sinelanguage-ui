import { Grid, Hidden } from '@material-ui/core'

import Centered from '~/components/Centered'
import ContentCardMedia from '~/components/ContentCardMedia'
import { Event } from '~/cms/types'
import EventDetail from '~/components/EventDetail'
import Head from '~/components/Head'
import Overlay from '~/components/Overlay'
import React from 'react'
import Scrollable from '~/components/Scrollable'
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
                    <Hidden smDown>
                        <Grid item xs={6}>
                            <Centered size={6}>
                                <ContentCardMedia content={data.contentfulEvent} />
                            </Centered>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={6}>
                        <Scrollable isWithMargin={true}>
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
