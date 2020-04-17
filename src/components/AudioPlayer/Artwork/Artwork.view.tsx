import { Artwork, Visualisation } from './Artwork.style'

import { FluidObject } from 'gatsby-image'
import React from 'react'
import SquareImage from '~/components/SquareImage'

type ViewProps = {
    title: string
    image: {
        fluid: FluidObject
    }
}

export default ({ title, image }: ViewProps) => {
    return (
        <Artwork>
            <SquareImage title={title} image={image} />
            <Visualisation></Visualisation>
        </Artwork>
    )
}
