import React, { ComponentProps } from 'react'

import NavItem from './NavItem.style'
import { Typography } from '@material-ui/core'

export default ({ to, title, partiallyActive }: ComponentProps<typeof NavItem>) => (
    <NavItem to={to} partiallyActive={partiallyActive}>
        <Typography variant="h1">{title}</Typography>
    </NavItem>
)
