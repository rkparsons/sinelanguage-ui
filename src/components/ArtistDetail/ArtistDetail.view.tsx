import { Grid, Typography } from '@material-ui/core'

import { Artist } from '~/cms/types'
import ContentPlayButton from '~/components/ContentPlayButton'
import React from 'react'
import RichText from '~/components/RichText'
import Socials from '~/components/Socials'

type ViewProps = {
    artist: Artist
}

export default ({ artist }: ViewProps) => (
    <>
        <Grid container spacing={5}>
            <Grid item>
                <Typography variant="h3">{artist.title.toUpperCase()}</Typography>
            </Grid>
            <Grid item>
                <ContentPlayButton content={artist} trackIndex={0} />
            </Grid>
        </Grid>
        <Socials urls={artist.socials} />
        <br />
        <RichText json={artist.bio.json} variant="body2" />
        <br />
    </>
)
