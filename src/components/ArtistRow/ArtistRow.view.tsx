import { Box, Typography } from '@material-ui/core'

import { Artist } from '~/cms/types'
import React from 'react'
import { marginSide } from '~/styles/sizes'

type ViewProps = {
    artist: Artist
}

export default ({ artist }: ViewProps) => (
    <Box paddingLeft={marginSide}>
        <Typography variant="h3">{artist.title.toUpperCase()}</Typography>
    </Box>
)
