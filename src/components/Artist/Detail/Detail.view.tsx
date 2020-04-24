import { ArtistDetail, ArtistImage, ArtistInfo } from './Detail.style'
import { Grid, Typography } from '@material-ui/core'

import { Artist } from '~/cms/types'
import Head from '~/components/Head'
import IconButton from '~/components/IconButton'
import { PlayArrow } from '@material-ui/icons'
import React from 'react'
import RichText from '~/components/RichText'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import SocialLink from '~/components/SocialLink'
import SquareImage from '~/components/SquareImage'

type ViewProps = {
    artist: Artist
}

export default ({ artist }: ViewProps) => {
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
                                <Typography variant="h3">
                                    {socials.map((url) => (
                                        <SocialLink url={url} />
                                    ))}
                                </Typography>
                                <RichText json={bio.json} />
                            </ArtistInfo>
                        </Grid>
                    </ArtistDetail>
                </>
            )}
        </SelectedMediaContext.Consumer>
    )
}
