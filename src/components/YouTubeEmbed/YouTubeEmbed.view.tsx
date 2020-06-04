import { Backdrop, VideoContainer } from './YouTubeEmbed.style'
import React, { useState } from 'react'
import { Typography, withWidth } from '@material-ui/core'

import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import ReactPlayer from 'react-player'
import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    width: Breakpoint
    artist: string
    title: string
    src: string
}

export default withWidth()(({ artist, title, width, src }: ViewProps) => {
    const isMobile = ['xs', 'sm'].includes(width)
    const [isPlaying, setIsPlaying] = useState(false)
    const { stopMedia } = useAudioContext()

    function onPlay() {
        stopMedia()
        setIsPlaying(true)
    }

    return (
        <>
            <Backdrop isVisible={isPlaying && isMobile} />
            <VideoContainer onClick={stopMedia}>
                <ReactPlayer
                    url={src}
                    controls={true}
                    height="auto"
                    playsinline={false}
                    config={{
                        youtube: {
                            playerVars: { modestbranding: 1, preload: true },
                        },
                    }}
                    onPlay={onPlay}
                />
            </VideoContainer>
        </>
    )
})
