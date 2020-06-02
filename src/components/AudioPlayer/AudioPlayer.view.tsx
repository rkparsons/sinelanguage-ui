import { AudioPlayer, ImageContainer, PlayerBody, PlayerPanel } from './AudioPlayer.style'
import React, { useEffect, useRef, useState } from 'react'
import { isMobile, isSafari } from 'react-device-detect'

import AudioVisualizer from '~/components/AudioVisualizer'
import { Box } from '@material-ui/core'
import Controls from './Controls'
import Label from './Label'
import { PlayerState } from '~/constants/playerState'
import Progress from './Progress'
import SquareImage from '~/components/SquareImage'
import StopButton from './StopButton'
import VolumeSlider from './VolumeSlider'
import useAnimationFrame from '~/hooks/useAnimationFrame'
import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    hideTimeout: number
}

export default ({ hideTimeout }: ViewProps) => {
    const [playerState, setPlayerState] = useState(PlayerState.CLOSED)
    const audioPlayer = useRef<HTMLDivElement>(null)
    const [audioData, setAudioData] = useState<number[]>([])
    const [timeMs, setTimeMs] = useState(0)
    const { isPlaying, track, artwork, artistTitle, getTimeMs, getAudioData } = useAudioContext()
    const isFullSizePlayer = !isMobile && !isSafari

    useEffect(() => {
        if (track) {
            setPlayerState(PlayerState.OPEN_AUTO)
        } else {
            setPlayerState(PlayerState.CLOSED)
        }
    }, [track])

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

    if (track && artwork) {
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
                        <Box>
                            {isFullSizePlayer && (
                                <ImageContainer>
                                    <SquareImage
                                        title={`${artistTitle} - ${track.title}`}
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
                                        <Box height="80%" paddingTop="15px">
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
}
