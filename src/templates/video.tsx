import { Grid, Typography } from '@material-ui/core'

import Centered from '~/components/Centered'
import Head from '~/components/Head'
import Overlay from '~/components/Overlay'
import React from 'react'
import { Video } from '~/cms/types'
import YouTubeEmbed from '~/components/YouTubeEmbed'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulVideo: Video
    }
}

export default ({ data }: Props) => {
    const { title, description, image, artist, srcURL } = data.contentfulVideo

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <Overlay>
                <Centered size={7}>
                    <YouTubeEmbed artist={artist.title} title={title} src={srcURL} />
                </Centered>
            </Overlay>
        </>
    )
}

export const query = graphql`
    query($uid: String!) {
        contentfulVideo(uid: { eq: $uid }) {
            ...videoFragment
        }
    }
`
