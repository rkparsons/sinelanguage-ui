import React from 'react'
import styles from './index.module.scss'

export default ({ image }) => (
    // replace with gatsby image if flickering issue fixed
    <img src={image.localFile.childImageSharp.fluid.src} className={styles.thumbnail} />
)
