import { Controls, ControlsGrid, VideoContainer } from './YouTubeEmbed.style'
import { Grid, IconButton, Typography } from '@material-ui/core'
import { Pause, PlayArrow } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'

import ReactPlayer from 'react-player'
import moment from 'moment'

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
    const [isPlaying, setIsPlaying] = useState(true)
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
                onDuration={setDuration}
                onProgress={({
                    played,
                    loaded,
                    playedSeconds,
                    loadedSeconds,
                }: OnProgressCallback) => setProgress(playedSeconds)}
            />
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
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" align="center">
                            {artist.toUpperCase()}, <i>{title}</i>
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        {duration && duration > 0 && (
                            <Typography variant="body2" align="right">
                                {`${formatSeconds(progress)} / ${formatSeconds(duration)}`}
                            </Typography>
                        )}
                    </Grid>
                </ControlsGrid>
            </Controls>
        </VideoContainer>
    )
}
