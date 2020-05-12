import { Box, Grid, Hidden } from '@material-ui/core'
import { Controls, IconButtonContainer } from './Controls.style'
import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'

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
                            icon={<SkipPrevious />}
                            onClick={previous}
                            isDisabled={!isPrevious()}
                            isLight={true}
                        />
                    </Grid>
                    <Box flexGrow={1} />
                </Hidden>
                <Grid item>
                    <IconButtonContainer>
                        <IconButton
                            icon={isPlaying ? <Pause /> : <PlayArrow />}
                            onClick={onPlayPause}
                            isLight={true}
                        />
                    </IconButtonContainer>
                </Grid>

                <Hidden smDown>
                    <Box flexGrow={1} />
                    <Grid item>
                        <IconButton
                            icon={<SkipNext />}
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
