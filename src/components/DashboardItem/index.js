import React from 'react'
import { Link, graphql } from 'gatsby'
import styles from './index.module.scss'
import { Flipped } from 'react-flip-toolkit'

const DashboardItem = ({ id, url, title, thumbnail }) => (
    <Flipped flipId={id}>
        <Link to={url}>
            <img src={thumbnail} alt={title} className={styles.thumbnail} />
            <h4>{title}</h4>
        </Link>
    </Flipped>
)

export default DashboardItem
