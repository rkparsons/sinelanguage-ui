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
    return (
        <Column widthMultiplier={1}>
            <MediaLink url={getUrl(release)}>
                <ContentCardMedia content={release} />
            </MediaLink>
            <ContentCardDetail>
                <Typography>
                    {release.artist.title.toUpperCase()}, <i>{release.title}</i>
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={1}></Grid>
                    <Grid item>
                        <ContentPlayButton content={release} />
                    </Grid>
                    <Grid item>
                        <IconButton
                            label={<Typography variant="body1">BUY</Typography>}
                            icon={<BagIcon />}
                            onClick={() => console.log('buy')}
                        />
                    </Grid>
                </Grid>
            </ContentCardDetail>
        </Column>
    )
}
