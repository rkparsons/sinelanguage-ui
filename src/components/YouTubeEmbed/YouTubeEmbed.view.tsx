import { Controls, ControlsGrid, VideoContainer } from './YouTubeEmbed.style'
import { Fullscreen, Pause, PlayArrow, VolumeOff, VolumeUp } from '@material-ui/icons'
import { Grid, Hidden, IconButton, Typography, withWidth } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { getDurationTimestamp, getTimestamp } from '~/utils/date'

import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import ReactPlayer from 'react-player'
import { findDOMNode } from 'react-dom'
import screenfull from 'screenfull'
import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    artist: string
    title: string
    src: string
    width: Breakpoint
}

type OnProgressCallback = {
    played: number
    loaded: number
    playedSeconds: number
    loadedSeconds: number
}

export default withWidth()(({ artist, title, src, width }: ViewProps) => {
    const isMobile = ['xs', 'sm'].includes(width)
    const player = useRef<ReactPlayer>(null)
    const [isPlaying, setIsPlaying] = useState(!isMobile)
    const [isMuted, setIsMuted] = useState(!isMobile)
    const [forceControlsVisibility, setForceControlsVisibility] = useState(true)
    const [isControlsVisible, setIsControlsVisible] = useState(true)
    const [duration, setDuration] = useState<number>()
    const [progress, setProgress] = useState<number>(0)
    const { stopMedia } = useAudioContext()

    useEffect(() => {
        const forceControlsVisibilityTimer = setTimeout(() => {
            setIsControlsVisible(false)
            setForceControlsVisibility(false)
        }, 4000)
        return () => clearTimeout(forceControlsVisibilityTimer)
    }, [])

    const handleFullscreenClick = () => {
        if (!screenfull.isEnabled || !player.current) {
            return
        }

        setIsMuted(false)
        setIsPlaying(true)

        const playerNode = findDOMNode(player.current)

        if (playerNode) {
            screenfull.request(playerNode as Element)
        }
    }

    const handlePlayClick = () => {
        if (isMobile) {
            handleFullscreenClick()
        } else {
            setIsPlaying(true)
        }
    }

    useEffect(() => {
        if (!isMuted) {
            stopMedia()
        }
    }, [isMuted])

    return (
        <VideoContainer
            onMouseOver={() => setIsControlsVisible(true)}
            onMouseLeave={() => setIsControlsVisible(false)}
        >
            <ReactPlayer
                ref={player}
                url={src}
                playing={isPlaying}
                muted={isMuted}
                controls={isMobile}
                config={{
                    youtube: {
                        playerVars: { modestbranding: 1, preload: true },
                    },
                }}
                onPause={() => setIsPlaying(false)}
                onPlay={handlePlayClick}
                onDuration={setDuration}
                onProgress={({
                    played,
                    loaded,
                    playedSeconds,
                    loadedSeconds,
                }: OnProgressCallback) => setProgress(playedSeconds)}
            />
            <Hidden smDown>
                <Controls isVisible={!isPlaying || forceControlsVisibility || isControlsVisible}>
                    <ControlsGrid container alignItems="center" justify="space-between">
                        <Grid item xs={3}>
                            <IconButton
                                onClick={() => setIsPlaying(!isPlaying)}
                                aria-label={isPlaying ? 'Pause the video' : 'Play the video'}
                            >
                                {isPlaying ? (
                                    <Pause fontSize="large" />
                                ) : (
                                    <PlayArrow fontSize="large" />
                                )}
                            </IconButton>
                            <IconButton
                                onClick={() => setIsMuted(!isMuted)}
                                aria-label={isMuted ? 'Unmute the video' : 'Mute the video'}
                            >
                                {isMuted ? (
                                    <VolumeOff fontSize="large" />
                                ) : (
                                    <VolumeUp fontSize="large" />
                                )}
                            </IconButton>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" align="center">
                                {artist.toUpperCase()}, <i>{title}</i>
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid container justify="space-between" alignItems="center">
                                <Grid item>
                                    {duration && duration > 0 && (
                                        <Hidden smDown>
                                            <Typography variant="body2" align="right">
                                                {`${getTimestamp(
                                                    progress * 1000,
                                                    duration * 1000
                                                )} / ${getDurationTimestamp(duration * 1000)}`}
                                            </Typography>
                                        </Hidden>
                                    )}
                                </Grid>
                                <Grid item>
                                    <IconButton
                                        onClick={handleFullscreenClick}
                                        aria-label="Fullscreen the video"
                                    >
                                        <Fullscreen fontSize="large" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ControlsGrid>
                </Controls>
            </Hidden>
        </VideoContainer>
    )
})
