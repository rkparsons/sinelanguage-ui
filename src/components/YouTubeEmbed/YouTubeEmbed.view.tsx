import React from 'react'
import { VideoContainer } from './YouTubeEmbed.style'

type ViewProps = {
    src: string
}

export default ({ src }: ViewProps) => {
    console.log(src.split('=')[0])
    return (
        <VideoContainer>
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${src.split('=')[1]}?autoplay=1`}
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </VideoContainer>
    )
}
