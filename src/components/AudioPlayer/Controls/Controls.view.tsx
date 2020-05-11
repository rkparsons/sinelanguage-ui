import { Box, Grid, Hidden } from '@material-ui/core'
import { Controls, IconButtonContainer } from './Controls.style'
import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons'
import React, { RefObject } from 'react'

import IconButton from '~/components/IconButton'

type ControlsProps = {
    trackIndex: number
    setTrackIndex(trackIndex: number): void
    isPlaying: boolean
    setIsPlaying(isPlaying: boolean): void
    volume: number
    setVolume(volume: number): void
    trackCount: number
    audioRef: RefObject<HTMLAudioElement>
}

export default ({
    trackIndex,
    setTrackIndex,
    isPlaying,
    setIsPlaying,
    volume,
    setVolume,
    trackCount,
    audioRef,
}: ControlsProps) => {
    const skipPrevious = () => {
        setTrackIndex(trackIndex - 1)
    }

    const skipNext = () => {
        setTrackIndex(trackIndex + 1)
    }

    const handleVolume = (event: any, newValue: number | number[]) => {
        setVolume(newValue as number)
    }

    const togglePlay = () => {
        if (!isPlaying) {
            audioRef.current?.play()
            setIsPlaying(true)
        } else {
            setIsPlaying(false)
        }
    }

    return (
        <Controls>
            <Grid container spacing={3}>
                <Hidden smDown>
                    <Grid item>
                        <IconButton
                            icon={<SkipPrevious />}
                            onClick={skipPrevious}
                            isDisabled={trackIndex === 0}
                            isLight={true}
                        />
                    </Grid>
                    <Box flexGrow={1} />
                </Hidden>
                <Grid item>
                    <IconButtonContainer>
                        <IconButton
                            icon={isPlaying ? <Pause /> : <PlayArrow />}
                            onClick={togglePlay}
                            isLight={true}
                        />
                    </IconButtonContainer>
                </Grid>

                <Hidden smDown>
                    <Box flexGrow={1} />
                    <Grid item>
                        <IconButton
                            icon={<SkipNext />}
                            onClick={skipNext}
                            isDisabled={trackIndex === trackCount - 1}
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
