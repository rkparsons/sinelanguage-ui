import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import React from 'react'
import ReactPlayer from 'react-player'
import { VideoContainer } from './YouTubeEmbed.style'
import useAudioContext from '~/hooks/useAudioContext'

type ViewProps = {
    artist: string
    title: string
    src: string
}

export default ({ src }: ViewProps) => {
    const { stopMedia } = useAudioContext()

    return (
        <VideoContainer onClick={stopMedia}>
            <ReactPlayer
                url={src}
                controls={true}
                playsinline={false}
                config={{
                    youtube: {
                        playerVars: { modestbranding: 1, preload: true },
                    },
                }}
                onPlay={stopMedia}
            />
        </VideoContainer>
    )
}
