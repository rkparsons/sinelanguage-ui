import React from 'react'
import styles from './index.module.scss'
import DashboardItem from '../DashboardItem'

export default ({ data, filter }) => {
    return (
        <div className={styles.container}>
            {data.allDataJson.edges.map(edge => (
                <DashboardItem key={edge.node.fields.id} {...edge.node} filter={filter} />
            ))}
        </div>
    )
}
