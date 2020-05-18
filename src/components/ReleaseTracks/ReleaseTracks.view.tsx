import { Box, Hidden, Typography } from '@material-ui/core'

import InvertOnHover from '~/components/InvertOnHover'
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
                    <InvertOnHover key={index}>
                        <TrackRow release={release} track={track} index={index} />
                    </InvertOnHover>
                    <Hidden smUp>
                        <br />
                    </Hidden>
                </Box>
            ))}
            <br />
        </>
    )
}
