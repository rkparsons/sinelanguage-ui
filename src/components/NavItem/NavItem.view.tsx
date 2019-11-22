import React, { ComponentProps } from 'react'

import NavItem from './NavItem.style'

export default ({ route, title }: ComponentProps<typeof NavItem>) => (
    <NavItem to={route}>{title}</NavItem>
)
