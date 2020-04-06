import { FluidObject } from 'gatsby-image'
import Image from 'gatsby-image'
import React from 'react'

type ViewProps = {
    title: string
    image: {
        fluid: FluidObject
    }
}

export default ({ title, image }: ViewProps) => (
    <Image title={title} alt={title} sizes={{ ...image.fluid, aspectRatio: 1 }} />
)
