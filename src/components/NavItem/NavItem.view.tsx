import { Box, Typography } from '@material-ui/core'
import React, { ComponentProps } from 'react'

import NavItem from './NavItem.style'

export default ({ to, title, partiallyActive }: ComponentProps<typeof NavItem>) => (
    <NavItem to={to} partiallyActive={partiallyActive}>
        <Typography variant="h3">{title}</Typography>
    </NavItem>
)
