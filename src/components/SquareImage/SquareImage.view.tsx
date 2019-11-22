import CardImage from './SquareImage.style'
import { FluidObject } from 'gatsby-image'
import React from 'react'

type ViewProps = {
    image: {
        localFile: {
            childImageSharp: {
                fluid: FluidObject
            }
        }
    }
}
export default ({ image }: ViewProps) => (
    // replace with gatsby image if flickering issue fixed
    <CardImage component="img" src={image.localFile.childImageSharp.fluid.src} />
)
