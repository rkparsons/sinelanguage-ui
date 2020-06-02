import { Box, Grid, Typography } from '@material-ui/core'

import { Controls } from './Controls.style'
import IconButton from '~/components/IconButton'
import React from 'react'
import { Unicode } from '~/constants/unicode'
import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    isFullSizePlayer: boolean
}

export default ({ isFullSizePlayer }: ViewProps) => {
    const {
        isPlaying,
        isPrevious,
        isNext,
        previous,
        next,
        playMedia,
        pauseMedia,
    } = useAudioContext()

    function onPlayPause() {
        isPlaying ? pauseMedia() : playMedia()
    }

    return (
        <Controls>
            <Grid container spacing={3}>
                {isFullSizePlayer && (
                    <>
                        <Grid item>
                            <IconButton
                                label={<Typography variant="h3">{Unicode.PREVIOUS}</Typography>}
                                onClick={previous}
                                isDisabled={!isPrevious()}
                                isLight={true}
                            />
                        </Grid>
                        <Box flexGrow={1} />
                    </>
                )}

                <Grid item>
                    <IconButton
                        label={
                            <Typography variant="h3">
                                {isPlaying ? Unicode.PAUSE : Unicode.PLAY}
                            </Typography>
                        }
                        onClick={onPlayPause}
                        isLight={true}
                    />
                </Grid>

                {isFullSizePlayer && (
                    <>
                        <Box flexGrow={1} />
                        <Grid item>
                            <IconButton
                                label={<Typography variant="h3">{Unicode.NEXT}</Typography>}
                                onClick={next}
                                isDisabled={!isNext()}
                                isLight={true}
                            />
                        </Grid>
                    </>
                )}
            </Grid>
        </Controls>
    )
}
