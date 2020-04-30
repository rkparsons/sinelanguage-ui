import { Controls, ControlsGrid, VideoContainer } from './YouTubeEmbed.style'
import { Fullscreen, Pause, PlayArrow, VolumeOff, VolumeUp } from '@material-ui/icons'
import { Grid, IconButton, Typography } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'

import ReactPlayer from 'react-player'
import { findDOMNode } from 'react-dom'
import moment from 'moment'
import screenfull from 'screenfull'

type ViewProps = {
    artist: string
    title: string
    src: string
}

type OnProgressCallback = {
    played: number
    loaded: number
    playedSeconds: number
    loadedSeconds: number
}

export default ({ artist, title, src }: ViewProps) => {
    const player = useRef<ReactPlayer>(null)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)
    const [forceControlsVisibility, setForceControlsVisibility] = useState(true)
    const [isControlsVisible, setIsControlsVisible] = useState(true)
    const [duration, setDuration] = useState<number>()
    const [progress, setProgress] = useState<number>(0)

    useEffect(() => {
        const forceControlsVisibilityTimer = setTimeout(() => {
            setIsControlsVisible(false)
            setForceControlsVisibility(false)
        }, 4000)
        return () => clearTimeout(forceControlsVisibilityTimer)
    }, [])

    const formatSeconds = (seconds: number) => moment.utc(seconds * 1000).format('mm:ss')

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
                config={{
                    youtube: {
                        playerVars: { modestbranding: 1, preload: true },
                    },
                }}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                onDuration={setDuration}
                onProgress={({
                    played,
                    loaded,
                    playedSeconds,
                    loadedSeconds,
                }: OnProgressCallback) => setProgress(playedSeconds)}
            />
            <Controls
                isVisible={!isPlaying || isMuted || forceControlsVisibility || isControlsVisible}
            >
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
                                    <Typography variant="body2" align="right">
                                        {`${formatSeconds(progress)} / ${formatSeconds(duration)}`}
                                    </Typography>
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
        </VideoContainer>
    )
}
