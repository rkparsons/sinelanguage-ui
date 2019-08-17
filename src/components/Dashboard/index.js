import React from 'react'
import styles from './index.module.scss'
import DashboardItem from '../DashboardItem'

export default ({ data }) => (
    <div className={styles.container}>
        {data.allDataJson.edges.map(edge => {
            return <DashboardItem key={edge.node.title} {...edge.node} />
        })}
    </div>
)
