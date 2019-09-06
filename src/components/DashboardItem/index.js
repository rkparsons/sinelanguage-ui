import React from 'react'
import { Link } from 'gatsby'
import styles from './index.module.scss'
import { Flipped } from 'react-flip-toolkit'

const DashboardItem = ({ fields, title, thumbnail }) => (
    <Flipped flipId={fields.id}>
        <Link to={fields.url}>
            <img src={thumbnail} alt={title} className={styles.thumbnail} />
            <h4>{title}</h4>
        </Link>
    </Flipped>
)

export default DashboardItem
