import CardImage from './SquareImage.style'
import { FluidObject } from 'gatsby-image'
import { PrismicArtistDataImage } from 'types/graphql'
import React from 'react'

type ViewProps = {
    image: PrismicArtistDataImage
}

export default ({ image }: ViewProps) => (
    // replace with gatsby image if flickering issue fixed
    <CardImage component="img" src={image.localFile!.childImageSharp!.fluid!.src!} />
)
