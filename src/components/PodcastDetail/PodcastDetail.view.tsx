import { Grid, Typography } from '@material-ui/core'

import IconButton from '~/components/IconButton'
import { PlayArrow } from '@material-ui/icons'
import { Podcast } from '~/cms/types'
import React from 'react'
import RichText from '~/components/RichText'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'

type ViewProps = {
    podcast: Podcast
}

export default ({ podcast }: ViewProps) => (
    <SelectedMediaContext.Consumer>
        {({ setSelectedMedia }) => (
            <>
                <Grid container spacing={5}>
                    <Grid item>
                        <Typography variant="h3">{podcast.title.toUpperCase()}</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton
                            label={<Typography variant="h3">PLAY</Typography>}
                            icon={<PlayArrow fontSize="large" />}
                            onClick={() => {
                                setSelectedMedia(podcast)
                            }}
                        />
                    </Grid>
                </Grid>
                <br />
                <RichText json={podcast.introduction.json} variant="body2" />
            </>
        )}
    </SelectedMediaContext.Consumer>
)
