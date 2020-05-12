import { FluidObject } from 'gatsby-image'
import Image from 'gatsby-image'
import React from 'react'

type ViewProps = {
    title: string
    image: FluidObject
}

export default ({ title, image }: ViewProps) => (
    <Image title={title} alt={title} sizes={{ ...image, aspectRatio: 1 }} />
)
