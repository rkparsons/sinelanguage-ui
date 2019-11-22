import React, { ComponentProps } from 'react'

import NavItem from './NavItem.style'

export default ({ to, title }: ComponentProps<typeof NavItem>) => <NavItem to={to}>{title}</NavItem>
