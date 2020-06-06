import { AudioPlayer, ImageContainer, PlayerBody, PlayerPanel } from './AudioPlayer.style'
import { Box, useMediaQuery, useTheme } from '@material-ui/core'
import React, { memo, useEffect, useRef, useState } from 'react'

import AudioVisualizer from '~/components/AudioVisualizer'
import Controls from './Controls'
import Label from './Label'
import { PlayerState } from '~/constants/playerState'
import Progress from './Progress'
import SquareImage from '~/components/SquareImage'
import StopButton from './StopButton'
import VolumeSlider from './VolumeSlider'
import { isSafari } from 'react-device-detect'
import useAnimationFrame from '~/hooks/useAnimationFrame'
import useAudioContext from '~/hooks/useAudioContext'

export default memo(() => {
    const [playerState, setPlayerState] = useState(PlayerState.CLOSED)
    const audioPlayer = useRef<HTMLDivElement>(null)
    const [audioData, setAudioData] = useState<number[]>([])
    const [timeMs, setTimeMs] = useState(0)
    const {
        isPlaying,
        tracks,
        trackIndex,
        artwork,
        artistTitle,
        getTimeMs,
        getAudioData,
    } = useAudioContext()
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'))
    const isFullSizePlayer = !isMobile && !isSafari
    const hideTimeout = 5000

    useEffect(() => {
        if (tracks[trackIndex]) {
            setPlayerState(PlayerState.OPEN_AUTO)
        } else {
            setPlayerState(PlayerState.CLOSED)
        }
    }, [tracks, trackIndex])

    useEffect(() => {
        if (playerState === PlayerState.OPEN_AUTO && isFullSizePlayer) {
            return minimiseAfterTimeout()
        }
    }, [playerState])

    useAnimationFrame(() => {
        setTimeMs(getTimeMs())

        if (getAudioData) {
            setAudioData(getAudioData())
        }
    }, isPlaying)

    function minimiseAfterTimeout() {
        const hideIfNoInteraction = setTimeout(() => {
            setPlayerState(PlayerState.MINIMISED)
        }, hideTimeout)
        return () => clearTimeout(hideIfNoInteraction)
    }

    function onMouseOver() {
        if (isFullSizePlayer) {
            setPlayerState(PlayerState.OPEN_MANUAL)
        }
    }

    function onMouseLeave() {
        if (isFullSizePlayer) {
            setPlayerState(PlayerState.MINIMISED)
        }
    }

    if (tracks[trackIndex] && artwork) {
        return (
            <AudioPlayer
                ref={audioPlayer}
                height={audioPlayer.current?.getBoundingClientRect().height || 0}
                playerState={playerState}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
            >
                <Progress timeMs={timeMs} />
                <PlayerBody>
                    <Box display="flex">
                        <Box display="flex" flexDirection="column" justifyContent="center">
                            {isFullSizePlayer && (
                                <ImageContainer>
                                    <SquareImage
                                        title={`${artistTitle} - ${tracks[trackIndex].title}`}
                                        image={artwork}
                                    />
                                </ImageContainer>
                            )}

                            <Controls isFullSizePlayer={isFullSizePlayer} />
                        </Box>
                        <Box flexGrow={1} minWidth={0}>
                            <PlayerPanel>
                                <Box display="flex" height="100%">
                                    <Box flexGrow={1} flexShrink={1} minWidth={0}>
                                        <Label timeMs={timeMs} />
                                    </Box>
                                    <Box>
                                        <Box height="20%">
                                            <StopButton />
                                        </Box>
                                        <Box height="80%" paddingTop="15px" paddingBottom="12px">
                                            {isFullSizePlayer && (
                                                <VolumeSlider
                                                    isVisible={
                                                        playerState !== PlayerState.MINIMISED
                                                    }
                                                />
                                            )}
                                        </Box>
                                    </Box>
                                </Box>
                                {isFullSizePlayer && (
                                    <AudioVisualizer
                                        audioData={audioData}
                                        isPlaying={isPlaying}
                                        playerState={playerState}
                                    />
                                )}
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
