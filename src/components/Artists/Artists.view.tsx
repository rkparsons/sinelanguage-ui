import { ArtistRow, Artists } from './Artists.style'
import { Box, Grid, Typography } from '@material-ui/core'

import { Artist } from '~/cms/types'
import React from 'react'

type ViewProps = {
    artists: Artist[]
}

export default ({ artists }: ViewProps) => (
    <Artists>
        <Grid container direction="column">
            {artists.map(artist => (
                <Grid item xs={12}>
                    <ArtistRow>
                        <Typography variant="h2">{artist.title}</Typography>
                    </ArtistRow>
                </Grid>
            ))}
        </Grid>
    </Artists>
)
