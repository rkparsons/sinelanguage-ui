import NavItem from './NavItem.style'
import React from 'react'

export default ({ route, title, getProps, isActive }) => (
    <NavItem to={route} getProps={getProps} isActive={isActive}>
        {title}
    </NavItem>
)
