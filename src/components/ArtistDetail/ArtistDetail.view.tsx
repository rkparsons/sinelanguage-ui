import { Artist, Release, Video } from '~/cms/types'
import { Box, Grid, Typography } from '@material-ui/core'

import ContentPlayButton from '~/components/ContentPlayButton'
import ContentThumbnail from '~/components/ContentThumbnail'
import Image from 'gatsby-image'
import React from 'react'
import ResponsiveGrid from '~/components/ResponsiveGrid'
import RichText from '~/components/RichText'
import Socials from '~/components/Socials'
import { maxContentWidth } from '~/styles/sizes'
import { sortByDate } from '~/utils/content'

type ViewProps = {
    artist: Artist
    releases: Release[]
    videos: Video[]
}

export default ({ artist, releases, videos }: ViewProps) => {
    const { title, image, socials, bio } = artist

    const relatedReleases = sortByDate([...releases, ...videos])
    const latestRelease = sortByDate(releases)[0] as Release

    return (
        <Box maxWidth={`${maxContentWidth}rem`}>
            <Typography variant="h3">{title.toUpperCase()}</Typography>
            <ContentPlayButton content={latestRelease} trackIndex={0} isLight={true} text="PLAY" />
            <br />
            <br />
            <ResponsiveGrid container isDesktop={false}>
                <br />
                    <Grid item xs={12} sm={8}>
                        <Image title={title} alt={title} sizes={{ ...image.fluid }} />
                    </Grid>
                <br />
            </ResponsiveGrid>

            <br />
            <RichText json={bio.json} variant="h3" />
            <br />
            <br />
            <Typography variant="h3">RELEASES</Typography>
            <br />
            <Grid container>
                {relatedReleases.map((relatedContent, index) => (
                    <ContentThumbnail content={relatedContent} key={index} />
                ))}
            </Grid>
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
