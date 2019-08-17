import React from 'react'
import styles from './index.module.scss'
import DashboardItem from '../DashboardItem'

export default ({ edges }) => (
    <div className={styles.container}>
        {edges.map(edge => {
            return <DashboardItem key={edge.node.title} {...edge.node} />
        })}
    </div>
)
