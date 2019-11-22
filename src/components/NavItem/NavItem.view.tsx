import NavItem from './NavItem.style'
import React from 'react'

interface ViewProps {
    route: string
    title: string
}

export default ({ route, title }: ViewProps) => <NavItem to={route}>{title}</NavItem>
