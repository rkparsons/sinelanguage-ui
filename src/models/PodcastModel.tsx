import { Grid, Typography } from '@material-ui/core'

import { ContentModel } from './ContentModel'
import IconButton from '~/components/IconButton'
import { PlayArrow } from '@material-ui/icons'
import { Podcast } from '../cms/types'
import React from 'react'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import moment from 'moment'

export class PodcastModel extends ContentModel {
    podcast: Podcast

    constructor(podcast: Podcast) {
        super(podcast)
        this.podcast = podcast
    }

    getDashboardInfoComponent = () => (
        <>
            <Typography variant="body1">{this.podcast.title.toUpperCase()}, Podcast</Typography>
            <Typography variant="body1">[{this.podcast.uid}]</Typography>
        </>
    )
    getListComponent = () => (
        <Grid container justify="space-between">
            <Grid item xs={1}>
                <Typography variant="h3">{this.podcast.uid}</Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h3">{this.podcast.title.toUpperCase()}</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography variant="h3">
                    {moment.utc(this.podcast.track.metadata.duration).format('H:mm:ss')}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="h3" align="right">
                    {moment(this.podcast.date).format(`MMM YYYY`).toUpperCase()}
                </Typography>
            </Grid>
        </Grid>
    )
    getDetailComponent = () => (
        <SelectedMediaContext.Consumer>
            {({ setSelectedMedia }) => (
                <Grid container spacing={5}>
                    <Grid item>
                        <Typography variant="h3">{this.podcast.title.toUpperCase()}</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton
                            label={<Typography variant="h3">PLAY</Typography>}
                            icon={<PlayArrow fontSize="large" />}
                            onClick={() => {
                                setSelectedMedia(this.podcast)
                            }}
                        />
                    </Grid>
                </Grid>
            )}
        </SelectedMediaContext.Consumer>
    )
    getDetailUrl = () => `/podcasts/${this.podcast.uid}`.toLowerCase()
}
