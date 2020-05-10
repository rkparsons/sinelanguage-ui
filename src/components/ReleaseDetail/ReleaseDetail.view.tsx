import { Grid, Hidden, Typography } from '@material-ui/core'

import ContentPlayButton from '~/components/ContentPlayButton'
import Image from 'gatsby-image'
import InvertOnHover from '~/components/InvertOnHover'
import React from 'react'
import { Release } from '~/cms/types'
import { getDurationTimestamp } from '~/utils/date'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => {
    const { artist, title, uid, format, image, tracks } = release

    return (
        <>
            <Typography variant="h3">
                {artist.title.toUpperCase()}, <i>{title}</i>
            </Typography>
            <br />
            <Typography variant="h3">[{uid}]</Typography>
            <Typography variant="h3">{format}</Typography>

            <ContentPlayButton content={release} trackIndex={0} isLight={true} />
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
                            <Grid container key={index} justify="space-between">
                                <Grid item xs={8}>
                                    <Typography variant="h3">
                                        {index + 1}&nbsp;&nbsp;&nbsp;{track.title}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h3">
                                        {getDurationTimestamp(track.metadata.duration)}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <ContentPlayButton
                                        content={release}
                                        trackIndex={index}
                                        isLight={true}
                                    />
                                </Grid>
                            </Grid>
                        </InvertOnHover>
                    ))}
                    <br />
                </>
            )}
        </>
    )
}
