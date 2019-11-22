import { LinkGetProps, LinkProps } from '@reach/router'

import NavItem from './NavItem.style'
import React from 'react'

interface ViewProps {
    route: string
    title: string
    getProps: (props: LinkGetProps) => {}
    isActive: boolean
}

export default ({ route, title, getProps, isActive }: ViewProps) => (
    <NavItem to={route} getProps={getProps} isActive={isActive}>
        {title}
    </NavItem>
)
