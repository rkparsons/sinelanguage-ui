import {
    AnimateOpacity,
    AudioPlayer,
    ImageContainer,
    PlayerBody,
    PlayerPanel,
    PlayerText,
} from './AudioPlayer.style'
import { Box, Grid, Hidden, Typography, withWidth } from '@material-ui/core'
import { Podcast, Release, Track } from '~/cms/types'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import Analyser from './Analyser'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { Close } from '@material-ui/icons'
import { ContentType } from '~/constants/contentType'
import Controls from './Controls'
import IconButton from '~/components/IconButton'
import { PlayerState } from '~/constants/playerState'
import Progress from './Progress'
import SquareImage from '~/components/SquareImage'
import { getTimestamp } from '~/utils/date'
import useAudioContext from '~/hooks/useAudioContext'
import useRecursiveTimeout from '~/hooks/useRecursiveTimeout'

type ViewProps = {
    width: Breakpoint
}

// todo: move clientId to env vars
export default withWidth()(({ width }: ViewProps) => {
    const [playerState, setPlayerState] = useState(PlayerState.CLOSED)
    const isMobile = ['xs', 'sm'].includes(width)
    const audioPlayer = useRef<HTMLDivElement>(null)
    const hideDelay = 5000
    const {
        audioRef,
        isPlaying,
        track,
        artwork,
        artistTitle,
        timeMs,
        durationMs,
        isHTMLAudioReady,
        isWebAudioAPIAvailable,
        stopMedia,
    } = useAudioContext()

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
            <>
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
                                            <PlayerText>
                                                <Typography variant="h5" gutterBottom>
                                                    {artistTitle}
                                                    <i>{track.title}</i>
                                                </Typography>
                                                <Typography variant="h5">
                                                    {getTimestamp(timeMs, durationMs)}/
                                                    {getTimestamp(durationMs, durationMs)}
                                                </Typography>
                                            </PlayerText>
                                        </Grid>
                                        <Grid item>
                                            <IconButton
                                                icon={<Close />}
                                                onClick={stopMedia}
                                                isLight={true}
                                            />
                                        </Grid>
                                    </Grid>
                                    {isHTMLAudioReady() && isWebAudioAPIAvailable() && (
                                        <AnimateOpacity
                                            isVisible={
                                                isPlaying && playerState !== PlayerState.MINIMISED
                                            }
                                        >
                                            {audioRef.current && (
                                                <Analyser
                                                    audio={audioRef.current}
                                                    isActive={isPlaying}
                                                />
                                            )}
                                        </AnimateOpacity>
                                    )}
                                </PlayerPanel>
                            </Box>
                        </Box>
                    </PlayerBody>
                </AudioPlayer>
            </>
        )
    } else {
        return <></>
    }
})
