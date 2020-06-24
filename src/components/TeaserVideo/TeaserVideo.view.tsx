import React, { useEffect, useRef } from 'react'

import { VideoContainer } from './TeaserVideo.style'
import { useInView } from 'react-intersection-observer'

type ViewProps = {
    src: string
}

export default ({ src }: ViewProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [containerRef, inView, entry] = useInView({ threshold: 0.1, triggerOnce: true })

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.setAttribute('muted', '1')
        }
    }, [videoRef.current])

    return (
        <VideoContainer ref={containerRef}>
            <video ref={videoRef} muted autoPlay loop playsInline>
                {inView && <source src={src} type="video/mp4" />}
            </video>
        </VideoContainer>
    )
}
