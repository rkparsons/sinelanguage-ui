import React from 'react'
import styles from './index.module.scss'
import DashboardItem from '../DashboardItem'

export default ({ data }) => (
    <div className={styles.container}>
        {data.allDataJson.edges.map(edge => (
            <DashboardItem key={edge.node.id} {...edge.node} />
        ))}
    </div>
)
