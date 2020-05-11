import { Artist } from '~/cms/types'
import Padding from '~/components/Padding'
import React from 'react'
import { Typography } from '@material-ui/core'

type ViewProps = {
    artist: Artist
}

export default ({ artist }: ViewProps) => (
    <Padding left right>
        <Typography variant="h3">{artist.title.toUpperCase()}</Typography>
    </Padding>
)
