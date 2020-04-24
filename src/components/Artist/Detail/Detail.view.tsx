import { Artist, Release } from '~/cms/types'
import { ArtistDetail, ArtistImage, ArtistInfo } from './Detail.style'
import { Grid, Typography } from '@material-ui/core'

import { Format } from '~/constants/format'
import Head from '~/components/Head'
import IconButton from '~/components/IconButton'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { PlayArrow } from '@material-ui/icons'
import React from 'react'
import { ReleaseModel } from '~/models'
import RichText from '~/components/RichText'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import SocialLink from '~/components/SocialLink'
import SquareImage from '~/components/SquareImage'

type ViewProps = {
    artist: Artist
    releaseModels: ReleaseModel[]
}

export default ({ artist, releaseModels }: ViewProps) => {
    const { title, description, image, bio, socials } = artist

    return (
        <SelectedMediaContext.Consumer>
            {({ setSelectedMedia }) => (
                <>
                    <Head
                        title={title}
                        description={description.description}
                        image={image.fluid.src}
                    />
                    <ArtistDetail container>
                        <Grid item xs={6}>
                            <ArtistImage container justify="center" alignItems="center">
                                <Grid item xs={7}>
                                    <SquareImage title={title} image={image} />
                                </Grid>
                            </ArtistImage>
                        </Grid>
                        <Grid item xs={6}>
                            <ArtistInfo>
                                <Grid container spacing={5}>
                                    <Grid item>
                                        <Typography variant="h3">{title.toUpperCase()}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <IconButton
                                            label={<Typography variant="h3">PLAY</Typography>}
                                            icon={<PlayArrow fontSize="large" />}
                                            onClick={() => {
                                                setSelectedMedia(artist)
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    {socials.map((url) => (
                                        <Grid item>
                                            <Typography variant="h3">
                                                <SocialLink url={url} />
                                            </Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                                <br />
                                <RichText json={bio.json} variant="body2" />
                                <br />
                                <Typography variant="h3">RELEASES</Typography>
                                <br />
                                <Grid container>
                                    {releaseModels.map((releaseModel) => (
                                        <Grid item xs={releaseModel.thumbnailGridSize}>
                                            <Link to={releaseModel.getDetailUrl()}>
                                                {releaseModel.getDashboardComponent()}
                                            </Link>

                                            {releaseModel.getThumbnailInfoComponent()}
                                            <br />
                                        </Grid>
                                    ))}
                                </Grid>
                            </ArtistInfo>
                        </Grid>
                    </ArtistDetail>
                </>
            )}
        </SelectedMediaContext.Consumer>
    )
}
