import { Box, Grid, Hidden, Typography } from '@material-ui/core'
import { Release, Track } from '~/cms/types'

import ContentPlayButton from '~/components/ContentPlayButton'
import ProductMenu from '~/components/ProductMenu'
import React from 'react'
import { TrackNumber } from './TrackRow.style'
import { getDurationTimestamp } from '~/utils/date'

type ViewProps = {
    release: Release
    track: Track
    index: number
}

export default ({ release, track, index }: ViewProps) => {
    const { products, title, metadata } = track

    return (
        <Box display="flex">
            <Box>
                <TrackNumber>
                    <Typography variant="h3">{index + 1}</Typography>
                </TrackNumber>
            </Box>
            <Box flexGrow={1}>
                <Typography variant="h3">
                    {title}{' '}
                    <Hidden mdUp>
                        <br />
                        {getDurationTimestamp(metadata.duration)}
                    </Hidden>
                </Typography>
            </Box>
            <Box>
                <Box display="flex" width="100%" justifyContent="flex-end" alignItems="center">
                    <Hidden smDown>
                        <Box paddingRight="20px">
                            <Typography variant="h3">
                                {getDurationTimestamp(metadata.duration)}
                            </Typography>
                        </Box>
                    </Hidden>
                    <ContentPlayButton content={release} trackIndex={index} isLight={true} />
                    <ProductMenu
                        release={release}
                        products={products}
                        isLight={true}
                        isLarge={true}
                        indicateWhenInBag={true}
                    />
                </Box>
            </Box>
        </Box>
    )
}
