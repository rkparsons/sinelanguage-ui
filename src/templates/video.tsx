import { Box, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'

import FullSizeGrid from '~/components/FullSizeGrid'
import Head from '~/components/Head'
import Overlay from '~/components/Overlay'
import { Video } from '~/cms/types'
import YouTubeEmbed from '~/components/YouTubeEmbed'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulVideo: Video
    }
}

export default ({ data }: Props) => {
    const infoRef = useRef<HTMLDivElement>(null)
    const [infoHeight, setInfoHeight] = useState(0)
    const { title, description, image, artist, srcURL } = data.contentfulVideo

    useEffect(() => {
        if (infoRef.current) {
            setInfoHeight(infoRef.current.getBoundingClientRect().height)
        }
    }, [infoRef.current])

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <Overlay>
                <FullSizeGrid justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <Box height={infoHeight} />
                    </Grid>
                    <Grid item xs={12} sm={11} md={10} lg={8} xl={7}>
                        <YouTubeEmbed artist={artist.title} title={title} src={srcURL} />
                    </Grid>
                    <Grid item xs={12} ref={infoRef}>
                        <Typography variant="h3" align="center" gutterBottom>
                            {artist.title} - {title}
                        </Typography>
                        <Typography variant="h3" align="center">
                            {description.description}
                        </Typography>
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
