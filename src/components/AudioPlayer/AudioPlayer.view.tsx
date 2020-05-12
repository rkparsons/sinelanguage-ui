import { AudioPlayer, ImageContainer, PlayerBody, PlayerPanel } from './AudioPlayer.style'
import { Box, Grid, Hidden, Typography, withWidth } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'

import AudioVisualizer from '~/components/AudioVisualizer'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { Close } from '@material-ui/icons'
import Controls from './Controls'
import Label from './Label'
import { PlayerState } from '~/constants/playerState'
import Progress from './Progress'
import SquareImage from '~/components/SquareImage'
import StopButton from './StopButton'
import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    width: Breakpoint
}

export default withWidth()(({ width }: ViewProps) => {
    const [playerState, setPlayerState] = useState(PlayerState.CLOSED)
    const isMobile = ['xs', 'sm'].includes(width)
    const audioPlayer = useRef<HTMLDivElement>(null)
    const hideDelay = 5000
    const { isPlaying, track, artwork, artistTitle, stopMedia } = useAudioContext()

    useEffect(() => {
        if (track) {
            setPlayerState(PlayerState.OPEN_AUTO)
        } else {
            setPlayerState(PlayerState.CLOSED)
        }
    }, [track])

    useEffect(() => {
        if (playerState === PlayerState.OPEN_AUTO && !isMobile) {
            return minimiseAfterTimeout()
        }
    }, [playerState])

    function minimiseAfterTimeout() {
        const hideIfNoInteraction = setTimeout(() => {
            setPlayerState(PlayerState.MINIMISED)
        }, hideDelay)
        return () => clearTimeout(hideIfNoInteraction)
    }

    function onMouseOver() {
        if (!isMobile) {
            setPlayerState(PlayerState.OPEN_MANUAL)
        }
    }

    function onMouseLeave() {
        if (!isMobile) {
            setPlayerState(PlayerState.MINIMISED)
        }
    }

    if (track && artwork) {
        return (
            <AudioPlayer
                ref={audioPlayer}
                height={audioPlayer.current?.getBoundingClientRect().height || 0}
                playerState={playerState}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
            >
                <Progress />
                <PlayerBody>
                    <Box display="flex">
                        <Box>
                            <Hidden smDown>
                                <ImageContainer>
                                    <SquareImage
                                        title={`${artistTitle} - ${track.title}`}
                                        image={artwork}
                                    />
                                </ImageContainer>
                            </Hidden>
                            <Controls />
                        </Box>
                        <Box flexGrow={1}>
                            <PlayerPanel>
                                <Grid container justify="space-between">
                                    <Grid item>
                                        <Label />
                                    </Grid>
                                    <Grid item>
                                        <StopButton />
                                    </Grid>
                                </Grid>
                                <Hidden smDown>
                                    <AudioVisualizer
                                        isActive={
                                            isPlaying && playerState !== PlayerState.MINIMISED
                                        }
                                    />
                                </Hidden>
                            </PlayerPanel>
                        </Box>
                    </Box>
                </PlayerBody>
            </AudioPlayer>
        )
    } else {
        return <></>
    }
})
