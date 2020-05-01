import { Grid, Typography } from '@material-ui/core'

import ContentPlayButton from '~/components/ContentPlayButton'
import IconButton from '~/components/IconButton'
import InvertOnHover from '~/components/InvertOnHover'
import { PlayArrow } from '@material-ui/icons'
import React from 'react'
import { Release } from '~/cms/types'
import moment from 'moment'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => (
    <>
        <Typography variant="h3">
            {release.artist.title.toUpperCase()}, <i>{release.title}</i>
        </Typography>
        <br />
        <Typography variant="h3">[{release.uid}]</Typography>
        <Typography variant="h3">{release.format}</Typography>

        <ContentPlayButton content={release} trackIndex={0} />
        <br />

        {release.tracks.length > 1 && (
            <>
                <Typography variant="h3">TRACKLIST</Typography>
                <br />
                {release.tracks.map((track, index) => (
                    <InvertOnHover key={index}>
                        <Grid container key={index} justify="space-between">
                            <Grid item xs={8}>
                                <Typography variant="h3">
                                    {index + 1}&nbsp;&nbsp;&nbsp;{track.title}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h3">
                                    {moment.utc(track.metadata.duration).format('H:mm:ss')}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <ContentPlayButton content={release} trackIndex={index} />
                            </Grid>
                        </Grid>
                    </InvertOnHover>
                ))}
                <br />
            </>
        )}
    </>
)
