import { Box, Grid, Typography } from '@material-ui/core'

import ContentPlayButton from '~/components/ContentPlayButton'
import Image from 'gatsby-image'
import Mobile from '~/components/Mobile'
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
    const { uid, title, introduction, image, trackList, socials, track } = podcast

    return (
        <Box maxWidth={`${maxContentWidth}rem`}>
            <Typography variant="h3">
                {title.toUpperCase()}, {uid}
            </Typography>
            <ContentPlayButton content={podcast} trackIndex={0} isLight={true} text="PLAY" />
            <br />
            <br />
            <Mobile>
                <br />
                <Grid container>
                    <Grid item xs={12} sm={8} md={6}>
                        <Image title={title} alt={title} sizes={{ ...image.fluid }} />
                    </Grid>
                </Grid>
            </Mobile>
            <br />
            <RichText json={introduction.json} variant="h3" />
            <br />
            <br />
            <Typography variant="h3">TRACKLIST</Typography>
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
            <br />
            <br />
            {socials && (
                <>
                    <Typography variant="h3">FOLLOW {title.toUpperCase()}</Typography>
                    <br />
                    <Socials urls={socials} />
                </>
            )}
        </Box>
    )
}
