import { Box, Grid, Hidden, Typography } from '@material-ui/core'

import ContentPlayButton from '~/components/ContentPlayButton'
import Image from 'gatsby-image'
import { Podcast } from '~/cms/types'
import React from 'react'
import RichText from '~/components/RichText'
import Socials from '~/components/Socials'
import { TrackNumber } from './PodcastDetail.style'
import { maxContentWidth } from '~/styles/sizes'

type ViewProps = {
    podcast: Podcast
}

export default ({ podcast }: ViewProps) => {
    const { title, introduction, image, trackList, socials } = podcast

    return (
        <Box maxWidth={`${maxContentWidth}rem`}>
            <Grid container spacing={5}>
                <Grid item>
                    <Box display="flex" alignItems="center" height="100%">
                        <Typography variant="h3">{title.toUpperCase()}</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <ContentPlayButton
                        content={podcast}
                        trackIndex={0}
                        isLight={true}
                        text="PLAY"
                    />
                </Grid>
            </Grid>

            <Hidden mdUp>
                <br />
                <Grid container>
                    <Grid item xs={12} sm={8} md={6}>
                        <Image title={title} alt={title} sizes={{ ...image.fluid }} />
                    </Grid>
                </Grid>
            </Hidden>

            <br />
            <RichText json={introduction.json} variant="h3" />

            <br />
            {trackList.map((trackListTrack, index) => (
                <Box display="flex">
                    <Box>
                        <TrackNumber>
                            <Typography variant="h3">{`0${index + 1}`.slice(-2)}</Typography>
                        </TrackNumber>
                    </Box>
                    <Box flexGrow={1}>
                        <Grid container key={index} justify="space-between">
                            <Grid item xs={12}>
                                <Typography variant="h3">
                                    {trackListTrack.artist} – <i>{trackListTrack.title}</i>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            ))}
            <br />
            {socials && (
                <>
                    <Typography variant="h3" gutterBottom>
                        FOLLOW {title.toUpperCase()}
                    </Typography>
                    <Socials urls={socials} />
                </>
            )}
        </Box>
    )
}
