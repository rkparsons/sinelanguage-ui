import { Backdrop, VideoContainer } from './YouTubeEmbed.style'
import React, { useState } from 'react'

import ReactPlayer from 'react-player'
import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    artist: string
    title: string
    src: string
}

export default ({ artist, title, src }: ViewProps) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const { stopMedia } = useAudioContext()

    function onPlay() {
        stopMedia()
        setIsPlaying(true)
    }

    return (
        <>
            <Backdrop isPlaying={isPlaying} />
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
