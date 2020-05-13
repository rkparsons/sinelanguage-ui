import React, { useRef } from 'react'

import { VideoContainer } from './TeaserVideo.style'

type ViewProps = {
    src: string
}

export default ({ src }: ViewProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
        <VideoContainer>
            <video ref={videoRef} muted autoPlay loop playsInline>
                <source src={src} type="video/mp4" />
            </video>
        </VideoContainer>
    )
}
