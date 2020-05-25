import { Box, Grid, Hidden, Typography } from '@material-ui/core'
import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'

import { Controls } from './Controls.style'
import IconButton from '~/components/IconButton'
import useAudioContext from '~/hooks/useAudioContext'

export default () => {
    const [volumeLevel, setVolumeLevel] = useState(1)

    const {
        isPlaying,
        isPrevious,
        isNext,
        previous,
        next,
        playMedia,
        pauseMedia,
        setVolume,
    } = useAudioContext()

    useEffect(() => {
        setVolume(volumeLevel)
    }, [volumeLevel])

    function onVolume(event: any, newValue: number | number[]) {
        setVolumeLevel(newValue as number)
    }

    function onPlayPause() {
        isPlaying ? pauseMedia() : playMedia()
    }

    return (
        <Controls>
            <Grid container spacing={3}>
                <Hidden smDown>
                    <Grid item>
                        <IconButton
                            label={<Typography variant="h3">{`\u0005`}</Typography>}
                            onClick={previous}
                            isDisabled={!isPrevious()}
                            isLight={true}
                        />
                    </Grid>
                    <Box flexGrow={1} />
                </Hidden>
                <Grid item>
                    <IconButton
                        label={
                            <Typography variant="h3">{isPlaying ? `\u0003` : `\u0002`}</Typography>
                        }
                        onClick={onPlayPause}
                        isLight={true}
                    />
                </Grid>

                <Hidden smDown>
                    <Box flexGrow={1} />
                    <Grid item>
                        <IconButton
                            label={<Typography variant="h3">{`\u0004`}</Typography>}
                            onClick={next}
                            isDisabled={!isNext()}
                            isLight={true}
                        />
                    </Grid>
                </Hidden>
            </Grid>
            {/* <SliderContainer>
                <Slider value={volume} onChange={handleVolume} min={0} max={1} step={0.01} />
            </SliderContainer> */}
        </Controls>
    )
}
