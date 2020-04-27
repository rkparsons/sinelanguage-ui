import { Box, Grid, Typography } from '@material-ui/core'

import { ContentModel } from './ContentModel'
import IconButton from '~/components/IconButton'
import InvertOnHover from '~/components/InvertOnHover'
import { PlayArrow } from '@material-ui/icons'
import React from 'react'
import { Release } from '../cms/types'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import moment from 'moment'

export class ReleaseModel extends ContentModel {
    release: Release

    constructor(release: Release) {
        super(release)
        this.release = release
    }

    getDashboardInfoComponent = () => (
        <>
            <Typography variant="body1">
                {this.release.artist.title.toUpperCase()}, <i>{this.release.title}</i>,{' '}
                {this.release.format}
            </Typography>
            <Typography variant="body1">[{this.release.uid}]</Typography>
        </>
    )
    getListComponent = () => (
        <Grid container justify="space-between">
            <Grid item xs={1}>
                <Typography variant="h3">{this.release.uid.slice(0, 7)}</Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h3">
                    {this.release.artist.title.toUpperCase()}, <i>{this.release.title}</i>
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography variant="h4">{this.release.format}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="h3" align="right">
                    {moment(this.release.date).format(`MMM YYYY`)}
                </Typography>
            </Grid>
        </Grid>
    )
    getThumbnailInfoComponent = () => (
        <>
            <Typography variant="body1">{this.release.title}</Typography>
            <Typography variant="body1">
                {moment(this.release.date).format('MMM. DD, YYYY')}
            </Typography>
        </>
    )
    getDetailComponent = () => (
        <SelectedMediaContext.Consumer>
            {({ setSelectedMedia }) => (
                <>
                    <Typography variant="h3">
                        {this.release.artist.title.toUpperCase()}, <i>{this.release.title}</i>
                    </Typography>
                    <br />
                    <Typography variant="h3">[{this.release.uid}]</Typography>
                    <Typography variant="h3">{this.release.format}</Typography>
                    <IconButton
                        label={<Typography variant="h3">PLAY</Typography>}
                        icon={<PlayArrow fontSize="large" />}
                        onClick={() => {
                            setSelectedMedia(this.release)
                        }}
                    />
                    <br />

                    {this.release.tracks.length > 1 && (
                        <>
                            <Typography variant="h3">TRACKLIST</Typography>
                            <br />
                            {this.release.tracks.map((track, index) => (
                                <InvertOnHover>
                                    <Grid container key={index} justify="space-between">
                                        <Grid item xs={8}>
                                            <Typography variant="h3">
                                                {index + 1}&nbsp;&nbsp;&nbsp;{track.title}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h3">
                                                {moment
                                                    .utc(track.metadata.duration)
                                                    .format('H:mm:ss')}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <IconButton
                                                label={<Typography variant="h3">PLAY</Typography>}
                                                icon={<PlayArrow fontSize="large" />}
                                                onClick={() => {
                                                    setSelectedMedia(track)
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </InvertOnHover>
                            ))}
                        </>
                    )}
                </>
            )}
        </SelectedMediaContext.Consumer>
    )
    getDetailUrl = () => `/releases/${this.release.uid}`.toLowerCase()
}
