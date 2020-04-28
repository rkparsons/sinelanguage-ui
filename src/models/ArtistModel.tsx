import { Artist, Release, Video } from '../cms/types'
import { Grid, Typography } from '@material-ui/core'
import { ReleaseModel, VideoModel } from '.'

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
    relatedModels: ContentModel[]

    constructor(artist: Artist & { release?: Release[]; video?: Video[] }) {
        super(artist)
        this.artist = artist

        // todo: abstract this for reuse in release, video and artist
        const relatedReleaseModels =
            artist.release?.map((release) => new ReleaseModel(release)) || []

        const relatedVideoModels = artist.video?.map((video) => new VideoModel(video)) || []

        this.relatedModels = ([] as ContentModel[])
            .concat(relatedReleaseModels)
            .concat(relatedVideoModels)

        this.relatedModels.sort((a, b) => b.getDateMs() - a.getDateMs())
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

    getDetailInfoComponent = () => (
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

                    {this.relatedModels.length && (
                        <>
                            <Typography variant="h3">RELEASES</Typography>
                            <br />
                            <Grid container>
                                {this.relatedModels.map((relatedModel, index) => (
                                    <Grid item xs={relatedModel.thumbnailGridSize} key={index}>
                                        <MediaLink url={relatedModel.getDetailUrl()}>
                                            {relatedModel.getDashboardComponent()}
                                        </MediaLink>

                                        {relatedModel.getThumbnailInfoComponent()}
                                        <br />
                                    </Grid>
                                ))}
                            </Grid>
                        </>
                    )}
                </>
            )}
        </SelectedMediaContext.Consumer>
    )
    getDetailUrl = () => `/artists/${this.artist.uid}`.toLowerCase()
}
