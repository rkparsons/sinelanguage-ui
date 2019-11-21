import CardImage from './SquareImage.style'
import React from 'react'

export default ({ image }) => (
    // replace with gatsby image if flickering issue fixed
    <CardImage component="img" src={image.localFile.childImageSharp.fluid.src} />
)
