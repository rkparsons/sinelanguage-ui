import { Grid, Hidden, Typography } from '@material-ui/core'

import ContentPlayButton from '~/components/ContentPlayButton'
import Image from 'gatsby-image'
import InvertOnHover from '~/components/InvertOnHover'
import React from 'react'
import { Release } from '~/cms/types'
import { Track } from './ReleaseDetail.style'
import { getDurationTimestamp } from '~/utils/date'
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
                            <Track onClick={() => playTrack(index)}>
                                <Grid container key={index} justify="space-between">
                                    <Grid item xs={8}>
                                        <Typography variant="h3">
                                            {index + 1}&nbsp;&nbsp;&nbsp;{track.title}
                                        </Typography>
                                    </Grid>
                                    {track.metadata.duration && (
                                        <Grid item>
                                            <Typography variant="h3">
                                                {getDurationTimestamp(track.metadata.duration)}
                                            </Typography>
                                        </Grid>
                                    )}
                                    {track.metadata.streamUrl && (
                                        <Grid item>
                                            <ContentPlayButton
                                                content={release}
                                                trackIndex={index}
                                                isLight={true}
                                            />
                                        </Grid>
                                    )}
                                </Grid>
                            </Track>
                        </InvertOnHover>
                    ))}
                    <br />
                </>
            )}
        </>
    )
}
