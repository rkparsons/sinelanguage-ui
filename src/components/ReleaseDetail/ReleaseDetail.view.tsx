import { Grid, Typography } from '@material-ui/core'

import IconButton from '~/components/IconButton'
import InvertOnHover from '~/components/InvertOnHover'
import { PlayArrow } from '@material-ui/icons'
import React from 'react'
import { Release } from '~/cms/types'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import moment from 'moment'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => (
    <SelectedMediaContext.Consumer>
        {({ setTrackIndex, setSelectedMedia }) => (
            <>
                <Typography variant="h3">
                    {release.artist.title.toUpperCase()}, <i>{release.title}</i>
                </Typography>
                <br />
                <Typography variant="h3">[{release.uid}]</Typography>
                <Typography variant="h3">{release.format}</Typography>
                <IconButton
                    label={<Typography variant="h3">PLAY</Typography>}
                    icon={<PlayArrow fontSize="large" />}
                    onClick={() => {
                        setSelectedMedia(release)
                    }}
                />
                <br />

                {release.tracks.length > 1 && (
                    <>
                        <Typography variant="h3">TRACKLIST</Typography>
                        <br />
                        {release.tracks.map((track, index) => (
                            <InvertOnHover>
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
                                        <IconButton
                                            label={<Typography variant="h3">PLAY</Typography>}
                                            icon={<PlayArrow fontSize="large" />}
                                            onClick={() => {
                                                setTrackIndex(index)
                                                setSelectedMedia(release)
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </InvertOnHover>
                        ))}
                        <br />
                    </>
                )}
            </>
        )}
    </SelectedMediaContext.Consumer>
)
