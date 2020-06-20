import { Box, Typography } from '@material-ui/core'
import { Release, Track } from '~/cms/types'

import ContentPlayButton from '~/components/ContentPlayButton'
import Desktop from '~/components/Desktop'
import Mobile from '~/components/Mobile'
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
            <Box flexGrow={1} paddingRight={3}>
                <Typography variant="h3">
                    {title}{' '}
                    <Mobile>
                        <br />
                        {getDurationTimestamp(metadata.duration)}
                    </Mobile>
                </Typography>
            </Box>
            <Box>
                <Box display="flex" width="100%" justifyContent="flex-end" alignItems="center">
                    <Desktop>
                        <Box paddingRight="20px">
                            <Typography variant="h3">
                                {getDurationTimestamp(metadata.duration)}
                            </Typography>
                        </Box>
                    </Desktop>
                    <Box paddingRight={2}>
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
