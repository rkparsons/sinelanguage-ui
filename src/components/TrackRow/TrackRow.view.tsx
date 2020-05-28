import { Box, Grid, Typography } from '@material-ui/core'
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
    const allProductDownloadsAvailable = products && products.every((product) => product.fileGUID)

    return (
        <Box display="flex">
            <Box>
                <TrackNumber>
                    <Typography variant="h3">{index + 1}</Typography>
                </TrackNumber>
            </Box>
            <Box flexGrow={1}>
                <Grid container key={index} justify="space-between">
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h3">{title}</Typography>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                        <Typography variant="h3">
                            {getDurationTimestamp(metadata.duration)}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Box
                            display="flex"
                            width="100%"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <ContentPlayButton
                                content={release}
                                trackIndex={index}
                                isLight={true}
                            />
                            {allProductDownloadsAvailable && (
                                <ProductMenu
                                    release={release}
                                    products={products}
                                    isLight={true}
                                    isLarge={true}
                                    indicateWhenInBag={true}
                                />
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
