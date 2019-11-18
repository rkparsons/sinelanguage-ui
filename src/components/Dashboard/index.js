import React from 'react'
import styles from './index.module.scss'
import DashboardItem from '../DashboardItem'

export default ({ dashboardItems, filter }) => {
    return (
        <div className={styles.container}>
            {dashboardItems.map((item, i) => (
                <DashboardItem key={i} {...item} filter={filter} />
            ))}
        </div>
    )
}
