import React from 'react'
import Img from 'gatsby-image'
import styles from './index.module.scss'

export default ({ image }) => (
    <Img fluid={image.localFile.childImageSharp.fluid} className={styles.thumbnail} />
)
