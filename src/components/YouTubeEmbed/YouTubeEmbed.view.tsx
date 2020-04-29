import { Controls, VideoContainer } from './YouTubeEmbed.style'
import React, { useEffect, useState } from 'react'

import ReactPlayer from 'react-player'

type ViewProps = {
    src: string
}

export default ({ src }: ViewProps) => {
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
                playing
                config={{
                    youtube: {
                        playerVars: { modestbranding: 1 },
                    },
                }}
            />
            <Controls isVisible={forceControlsVisibility || isControlsVisible} />
        </VideoContainer>
    )
}
