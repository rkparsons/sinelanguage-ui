import { AppBar, Button, Grid, IconButton, Toolbar } from '@material-ui/core'
import { Controls, VideoContainer } from './YouTubeEmbed.style'
import { Pause, PlayArrow } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'

import ReactPlayer from 'react-player'

type ViewProps = {
    src: string
}

export default ({ src }: ViewProps) => {
    const [isPlaying, setIsPlaying] = useState(true)
    const [forceControlsVisibility, setForceControlsVisibility] = useState(true)
    const [isControlsVisible, setIsControlsVisible] = useState(true)

    useEffect(() => {
        const forceControlsVisibilityTimer = setTimeout(() => {
            setIsControlsVisible(false)
            setForceControlsVisibility(false)
        }, 4000)
        return () => clearTimeout(forceControlsVisibilityTimer)
    }, [])

    return (
        <VideoContainer
            onMouseOver={() => setIsControlsVisible(true)}
            onMouseLeave={() => setIsControlsVisible(false)}
        >
            <ReactPlayer
                url={src}
                playing={isPlaying}
                config={{
                    youtube: {
                        playerVars: { modestbranding: 1, preload: true },
                    },
                }}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
            />
            <Controls isVisible={!isPlaying || forceControlsVisibility || isControlsVisible}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            onClick={() => setIsPlaying(!isPlaying)}
                            aria-label={isPlaying ? 'Pause the video' : 'Play the video'}
                        >
                            {isPlaying ? <Pause /> : <PlayArrow />}
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Controls>
        </VideoContainer>
    )
}
