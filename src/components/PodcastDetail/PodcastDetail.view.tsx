import { Grid, Typography } from '@material-ui/core'

import ContentPlayButton from '~/components/ContentPlayButton'
import { Podcast } from '~/cms/types'
import React from 'react'
import RichText from '~/components/RichText'

type ViewProps = {
    podcast: Podcast
}

export default ({ podcast }: ViewProps) => (
    <>
        <Grid container spacing={5}>
            <Grid item>
                <Typography variant="h3">{podcast.title.toUpperCase()}</Typography>
            </Grid>
            <Grid item>
                <ContentPlayButton content={podcast} trackIndex={0} isLight={true} />
            </Grid>
        </Grid>
        <br />
        <RichText json={podcast.introduction.json} variant="body2" />
    </>
)
