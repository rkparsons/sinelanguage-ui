import { Grid, Hidden, Typography } from '@material-ui/core'

import ContentPlayButton from '~/components/ContentPlayButton'
import Image from 'gatsby-image'
import InvertOnHover from '~/components/InvertOnHover'
import React from 'react'
import { Release } from '~/cms/types'
import TrackRow from '~/components/TrackRow'
import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => {
    const { artist, title, uid, format, image, tracks } = release
    const isTracksMissingMetadata = tracks.find((track) => !track.metadata.streamUrl) !== undefined
    const { loadMedia } = useAudioContext()

    const playTrack = (index: number) => {
        if (tracks[index].metadata.streamUrl) {
            loadMedia(release, index)
        }
    }

    return (
        <>
            <Typography variant="h3">
                {artist.title.toUpperCase()}, <i>{title}</i>
            </Typography>
            <br />
            <Typography variant="h3">[{uid}]</Typography>
            <Typography variant="h3">{format}</Typography>
            {!isTracksMissingMetadata && (
                <ContentPlayButton content={release} trackIndex={0} isLight={true} />
            )}

            <br />

            <Hidden lgUp>
                <Grid container>
                    <Grid item xs={12} sm={8} md={6}>
                        <Image title={title} alt={title} sizes={{ ...image.fluid }} />
                    </Grid>
                </Grid>

                <br />
            </Hidden>

            {tracks.length > 1 && (
                <>
                    <Typography variant="h3">TRACKLIST</Typography>
                    <br />
                    {tracks.map((track, index) => (
                        <InvertOnHover key={index}>
                            <TrackRow release={release} track={track} index={index} />
                        </InvertOnHover>
                    ))}
                    <br />
                </>
            )}
        </>
    )
}
