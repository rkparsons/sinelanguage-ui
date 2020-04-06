import { FluidObject } from 'gatsby-image'
import { IFrame } from './EmbeddedPlayer.style'
import Image from 'gatsby-image'
import React from 'react'

type ViewProps = {
    embeddedPlayer: string
}

export default ({ embeddedPlayer }: ViewProps) => {
    const parser = new DOMParser()

    const iFrame = parser
        .parseFromString(embeddedPlayer, 'text/html')
        .getElementsByTagName('iframe')
    const src = iFrame.length ? iFrame[0].src : undefined
    if (!src) {
        return <></>
    }

    return (
        <IFrame
            src={src}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></IFrame>
    )
}
