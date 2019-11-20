import React from 'react'
import styles from './index.module.scss'

export default ({ image }) => (
    <img src={image.localFile.childImageSharp.fluid.src} className={styles.thumbnail} />
)
