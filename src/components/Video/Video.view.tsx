import React, { memo, useRef } from 'react'

import { VideoContainer } from './Video.style'

type ViewProps = {
    src: string
}

export default ({ src }: ViewProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
        <VideoContainer>
            <video ref={videoRef} autoPlay loop>
                <source src={src} type="video/mp4" />
            </video>
        </VideoContainer>
    )
}
