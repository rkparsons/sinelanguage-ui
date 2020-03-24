import React, { ComponentProps } from 'react'

import NavItem from './NavItem.style'

export default ({ to, title, partiallyActive }: ComponentProps<typeof NavItem>) => (
    <NavItem to={to} partiallyActive={partiallyActive}>
        {title}
    </NavItem>
)
