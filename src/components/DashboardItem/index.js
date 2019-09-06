import React from 'react'
import { Link } from 'gatsby'
import styles from './index.module.scss'
import { Flipped } from 'react-flip-toolkit'

const DashboardItem = ({ id, layout, title, thumbnail }) => (
    <Flipped flipId={id}>
        <Link to={layout + 's/' + id}>
            <img src={thumbnail} alt={title} className={styles.thumbnail} />
            <h4>{title}</h4>
        </Link>
    </Flipped>
)

export default DashboardItem
