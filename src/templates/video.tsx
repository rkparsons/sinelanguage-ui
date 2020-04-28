import Centered from '~/components/Centered'
import Head from '~/components/Head'
import Overlay from '~/components/Overlay'
import React from 'react'
import TeaserVideo from '~/components/TeaserVideo'
import { Typography } from '@material-ui/core'
import { Video } from '~/cms/types'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulVideo: Video
    }
}

export default ({ data }: Props) => {
    const { title, description, image, teaserVideo, artist } = data.contentfulVideo

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <Overlay>
                <Centered size={7}>
                    <TeaserVideo src={teaserVideo.file.url} />
                    <br />
                    <Typography variant="body2" align="center">
                        {artist.title.toUpperCase()}, <i>{title}</i>
                    </Typography>
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
