import { Grid, Typography } from '@material-ui/core'

import { Artist } from '~/cms/types'
import IconButton from '~/components/IconButton'
import { PlayArrow } from '@material-ui/icons'
import React from 'react'
import RichText from '~/components/RichText'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import SocialLink from '~/components/SocialLink'

type ViewProps = {
    artist: Artist
}

export default ({ artist }: ViewProps) => (
    <SelectedMediaContext.Consumer>
        {({ setSelectedMedia }) => (
            <>
                <Grid container spacing={5}>
                    <Grid item>
                        <Typography variant="h3">{artist.title.toUpperCase()}</Typography>
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
                    {artist.socials.map((url, index) => (
                        <Grid item key={index}>
                            <Typography variant="h3">
                                <SocialLink url={url} />
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
                <br />
                <RichText json={artist.bio.json} variant="body2" />
                <br />
            </>
        )}
    </SelectedMediaContext.Consumer>
)
