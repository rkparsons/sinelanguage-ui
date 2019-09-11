import React from 'react'
import Img from 'gatsby-image'
import styles from './index.module.scss'

export default ({ fields }) => (
    <Img fluid={fields.responsiveThumbnail.childImageSharp.fluid} className={styles.thumbnail} />
)
