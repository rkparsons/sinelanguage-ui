import { Grid, Typography } from '@material-ui/core'

import Column from '~/components/Column'
import ContentCardDetail from '~/components/ContentCardDetail'
import ContentCardMedia from '~/components/ContentCardMedia'
import ContentPlayButton from '~/components/ContentPlayButton'
import MediaLink from '~/components/MediaLink'
import { Podcast } from '~/cms/types'
import React from 'react'
import { getUrl } from '~/utils/content'

type ViewProps = {
    podcast: Podcast
}

export default ({ podcast }: ViewProps) => {
    const { title } = podcast

    return (
        <Column widthMultiplier={1}>
            <MediaLink url={getUrl(podcast)}>
                <ContentCardMedia content={podcast} />
            </MediaLink>
            <ContentCardDetail>
                <Typography variant="body1">{title}, Podcast</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <ContentPlayButton
                            content={podcast}
                            trackIndex={0}
                            isLarge={false}
                            isLight={false}
                            text="PLAY"
                        />
                    </Grid>
                </Grid>
            </ContentCardDetail>
        </Column>
    )
}
