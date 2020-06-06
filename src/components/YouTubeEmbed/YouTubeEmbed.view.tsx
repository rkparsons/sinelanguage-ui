import { Backdrop, VideoContainer } from './YouTubeEmbed.style'
import React, { useState } from 'react'
import { useMediaQuery, useTheme } from '@material-ui/core'

import ReactPlayer from 'react-player'
import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    artist: string
    title: string
    src: string
}

export default ({ artist, title, src }: ViewProps) => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'))
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
}
