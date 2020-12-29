import { Box, Typography } from '@material-ui/core'

import Mobile from '~/components/Mobile'
import React from 'react'
import { Release } from '~/cms/types'
import TrackRow from '~/components/TrackRow'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => {
    const { tracks } = release

    if (!release.tracks) {
        return <></>
    }

    return (
        <>
            <br />
            <Typography variant="h3">TRACKLIST</Typography>
            <br />
            {tracks.map((track, index) => (
                <Box key={index}>
                    <TrackRow release={release} track={track} index={index} />                    
                    <Mobile>
                        <br />
                    </Mobile>
                </Box>
            ))}
            <br />
        </>
    )
}
