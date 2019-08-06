import React from 'react'
import styles from './index.module.scss'

const DashboardItem = ({ title, thumbnail }) => (
    <div>
        <img src={thumbnail} alt={title} className={styles.thumbnail} />
        <h4>{title}</h4>
    </div>
)

export default DashboardItem
