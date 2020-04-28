import { Artist } from '~/cms/types'
import React from 'react'
import { Typography } from '@material-ui/core'

type ViewProps = {
    artist: Artist
}

export default ({ artist }: ViewProps) => (
    <Typography variant="h3">{artist.title.toUpperCase()}</Typography>
)
