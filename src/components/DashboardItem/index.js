import React from 'react'
import dashboardItemStyles from './index.module.scss'

const DashboardItem = ({ title, thumbnail }) => (
    <div>
        <img src={thumbnail} className={dashboardItemStyles.thumbnail} />
        <h4>{title}</h4>
    </div>
)

export default DashboardItem
