import { Box, Typography } from '@material-ui/core'
import { Release, Track } from '~/cms/types'

import ContentPlayButton from '~/components/ContentPlayButton'
import Mobile from '~/components/Mobile'
import ProductMenu from '~/components/ProductMenu'
import React from 'react'
import ResponsiveBox from '~/components/ResponsiveBox'
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
            <Box flexGrow={1} paddingRight={3}>
                <Typography variant="h3">
                    {title}{' '}
                    <ResponsiveBox isDesktop={false}>
                        <br />
                        {getDurationTimestamp(metadata.duration)}
                    </ResponsiveBox>
                </Typography>
            </Box>
            <Box>
                <Box display="flex" width="100%" justifyContent="flex-end" alignItems="center">
                    <ResponsiveBox paddingRight="20px" isDesktop={true}>
                        <Typography variant="h3">
                            {getDurationTimestamp(metadata.duration)}
                        </Typography>
                    </ResponsiveBox>
                    <Box paddingRight={1}>
                        <ContentPlayButton content={release} trackIndex={index} isLight={true} />
                    </Box>
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
