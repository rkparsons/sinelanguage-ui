import FullSizeGrid from '~/components/FullSizeGrid'
import { Grid } from '@material-ui/core'
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
                <FullSizeGrid justify="center" alignItems="center">
                    <Grid item xs={12} sm={11} md={10} lg={8} xl={7}>
                        <YouTubeEmbed artist={artist.title} title={title} src={srcURL} />
                    </Grid>
                </FullSizeGrid>
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
