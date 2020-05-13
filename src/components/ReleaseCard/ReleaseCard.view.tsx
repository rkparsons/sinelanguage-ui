import { Grid, Typography } from '@material-ui/core'

import BagIcon from '~/components/BagIcon'
import Column from '~/components/Column'
import ContentCardDetail from '~/components/ContentCardDetail'
import ContentCardMedia from '~/components/ContentCardMedia'
import ContentPlayButton from '~/components/ContentPlayButton'
import IconButton from '~/components/IconButton'
import MediaLink from '~/components/MediaLink'
import React from 'react'
import { Release } from '~/cms/types'
import { getUrl } from '~/utils/content'

type ViewProps = {
    release: Release
}

export default ({ release }: ViewProps) => {
    const { title, artist, tracks } = release
    const isTracksMissingMetadata = tracks.find((track) => !track.metadata.streamUrl) !== undefined

    return (
        <Column widthMultiplier={1}>
            <MediaLink url={getUrl(release)}>
                <ContentCardMedia content={release} />
            </MediaLink>
            <ContentCardDetail>
                <Typography>
                    {artist.title.toUpperCase()}, <i>{title}</i>
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={1}></Grid>
                    {!isTracksMissingMetadata && (
                        <Grid item>
                            <ContentPlayButton
                                content={release}
                                trackIndex={0}
                                isLarge={false}
                                isLight={false}
                            />
                        </Grid>
                    )}

                    <Grid item>
                        <IconButton
                            label={<Typography variant="body1">BUY</Typography>}
                            icon={<BagIcon />}
                            onClick={() => console.log('buy')}
                            isLight={false}
                        />
                    </Grid>
                </Grid>
            </ContentCardDetail>
        </Column>
    )
}
