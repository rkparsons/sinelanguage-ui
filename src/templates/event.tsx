import { Grid, Hidden } from '@material-ui/core'

import Centered from '~/components/Centered'
import { Event } from '~/cms/types'
import EventDetail from '~/components/EventDetail'
import Head from '~/components/Head'
import Image from 'gatsby-image'
import Overlay from '~/components/Overlay'
import React from 'react'
import Scrollable from '~/components/Scrollable'
import SideMargins from '~/components/SideMargins'
import TeaserVideo from '~/components/TeaserVideo'
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
                    <Hidden mdDown>
                        <Grid item xs={6}>
                            <Centered size={7}>
                                <TeaserVideo src={teaserVideo.file.url} />
                            </Centered>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} lg={6}>
                        <Scrollable>
                            <SideMargins>
                                <EventDetail event={data.contentfulEvent} />
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
        contentfulEvent(uid: { eq: $uid }) {
            ...eventFragment
        }
    }
`
