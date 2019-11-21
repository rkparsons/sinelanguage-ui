import { CardImage } from './SquareImage.styles'
import React from 'react'

const SquareImage = ({ image }) => (
    // replace with gatsby image if flickering issue fixed
    <CardImage component="img" src={image.localFile.childImageSharp.fluid.src} />
)

export { SquareImage }
