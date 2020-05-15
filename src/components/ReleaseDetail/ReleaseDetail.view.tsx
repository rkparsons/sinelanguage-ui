import { Box, Grid, Hidden, Typography } from '@material-ui/core'

import BuyButton from '~/components/BuyButton'
import ContentPlayButton from '~/components/ContentPlayButton'
import Image from 'gatsby-image'
import InvertOnHover from '~/components/InvertOnHover'
import React from 'react'
import { Release } from '~/cms/types'
import TrackRow from '~/components/TrackRow'
import { getUrl } from '~/utils/content'
import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => {
    const { artist, title, uid, format, image, tracks } = release

    return (
        <>
            <Typography variant="h3">
                {artist.title.toUpperCase()}, <i>{title}</i>
            </Typography>
            <br />
            <Typography variant="h3">[{uid}]</Typography>
            <Typography variant="h3">{format}</Typography>
            <ContentPlayButton content={release} trackIndex={0} isLight={true} />

            <br />

            <Hidden lgUp>
                <Grid container>
                    <Grid item xs={12} sm={8} md={6}>
                        <Image title={title} alt={title} sizes={{ ...image.fluid }} />
                    </Grid>
                </Grid>

                <br />
            </Hidden>

            {tracks.length > 1 && (
                <>
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
            )}

            <Typography variant="h3">BUY</Typography>
            <BuyButton id="1" price={18.99} url={getUrl(release)} name="Ellipsis Vinyl" />
            <br />
            <br />
        </>
    )
}
