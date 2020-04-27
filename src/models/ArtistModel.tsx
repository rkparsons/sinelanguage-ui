import { Artist, Release } from '../cms/types'
import { Grid, Typography } from '@material-ui/core'
import { ReleaseModel, VideoReleaseModel } from '.'

import { ContentModel } from './ContentModel'
import { Format } from '~/constants/format'
import IconButton from '~/components/IconButton'
import MediaLink from '~/components/MediaLink'
import { PlayArrow } from '@material-ui/icons'
import React from 'react'
import RichText from '~/components/RichText'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import SocialLink from '~/components/SocialLink'

export class ArtistModel extends ContentModel {
    artist: Artist
    releaseModels: ReleaseModel[]

    constructor(artist: Artist & { release?: Release[] }) {
        super(artist)
        this.artist = artist

        // todo: replace with factory method
        this.releaseModels =
            artist.release?.map((release) =>
                release.format === Format.VIDEO
                    ? new VideoReleaseModel(release)
                    : new ReleaseModel(release)
            ) || []
    }

    getDashboardInfoComponent = () => (
        <>
            <Typography>{this.artist.title}</Typography>
        </>
    )
    getListComponent = () => <Typography variant="h3">{this.artist.title.toUpperCase()}</Typography>

    getThumbnailInfoComponent = () => (
        <Typography variant="body1">{this.content.title.toUpperCase()}</Typography>
    )

    getDetailComponent = () => (
        <SelectedMediaContext.Consumer>
            {({ setSelectedMedia }) => (
                <>
                    <Grid container spacing={5}>
                        <Grid item>
                            <Typography variant="h3">{this.artist.title.toUpperCase()}</Typography>
                        </Grid>
                        <Grid item>
                            <IconButton
                                label={<Typography variant="h3">PLAY</Typography>}
                                icon={<PlayArrow fontSize="large" />}
                                onClick={() => {
                                    setSelectedMedia(this.artist)
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        {this.artist.socials.map((url, index) => (
                            <Grid item key={index}>
                                <Typography variant="h3">
                                    <SocialLink url={url} />
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                    <br />
                    <RichText json={this.artist.bio.json} variant="body2" />
                    <br />
                    <Typography variant="h3">RELEASES</Typography>
                    <br />
                    <Grid container>
                        {this.releaseModels.map((releaseModel, index) => (
                            <Grid item xs={releaseModel.thumbnailGridSize} key={index}>
                                <MediaLink url={releaseModel.getDetailUrl()}>
                                    {releaseModel.getDashboardComponent()}
                                </MediaLink>

                                {releaseModel.getThumbnailInfoComponent()}
                                <br />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </SelectedMediaContext.Consumer>
    )
    getDetailUrl = () => `/artists/${this.artist.uid}`.toLowerCase()
}
