import Centered from '~/components/Centered'
import { Event } from '~/cms/types'
import EventDetail from '~/components/EventDetail'
import { Grid } from '@material-ui/core'
import Head from '~/components/Head'
import Image from 'gatsby-image'
import Overlay from '~/components/Overlay'
import React from 'react'
import Scrollable from '~/components/Scrollable'
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
                    <Grid item xs={6}>
                        <Centered size={7}>
                            <TeaserVideo src={teaserVideo.file.url} />
                        </Centered>
                    </Grid>
                    <Grid item xs={6}>
                        <Scrollable>
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
