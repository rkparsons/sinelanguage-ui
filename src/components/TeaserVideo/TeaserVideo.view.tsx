import React, { useEffect, useRef } from 'react'

import { VideoContainer } from './TeaserVideo.style'

type ViewProps = {
    src: string
}

export default ({ src }: ViewProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.setAttribute('muted', '1')
        }
    }, [videoRef.current])

    return (
        <VideoContainer>
            <video ref={videoRef} muted autoPlay loop playsInline>
                <source src={src} type="video/mp4" />
            </video>
        </VideoContainer>
    )
}
