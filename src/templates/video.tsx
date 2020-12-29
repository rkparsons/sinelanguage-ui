import { Box, Typography } from '@material-ui/core'

import Head from '~/components/Head'
import Mobile from '~/components/Mobile'
import Overlay from '~/components/Overlay'
import React from 'react'
import ResponsiveBox from '~/components/ResponsiveBox'
import RichText from '~/components/RichText'
import { Video } from '~/cms/types'
import YouTubeEmbed from '~/components/YouTubeEmbed'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulVideo: Video
    }
}

export default ({ data }: Props) => {
    const { title, credits, description, image, artist, srcURL } = data.contentfulVideo

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <Overlay>
                <Box
                    display="flex"
                    width="100%"
                    height="100%"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box height="5vh"></Box>
                    <ResponsiveBox width="100%" isDesktop={false}>
                        <YouTubeEmbed artist={artist.title} title={title} src={srcURL} />
                    </ResponsiveBox>
                    <ResponsiveBox width="60%" isDesktop={true}>
                        <YouTubeEmbed artist={artist.title} title={title} src={srcURL} />
                    </ResponsiveBox>
                    <Box height="5vh">
                        <br />
                        <Typography variant="h5" align="center">
                            {artist.title}, <i>{title}</i>
                        </Typography>
                        <RichText json={credits.json} variant="h5" align="center" />
                    </Box>
                </Box>
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
