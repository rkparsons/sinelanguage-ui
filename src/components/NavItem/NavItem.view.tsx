import { LinkGetProps, LinkProps } from '@reach/router'

import { Link } from 'gatsby'
import NavItem from './NavItem.style'
import React from 'react'

interface ViewProps {
    route: string
    title: string
    // getProps: (props: LinkGetProps) => {}
}

// export default ({ route, title }: ViewProps) => <NavItem to={route}>{title}</NavItem>
export default ({ route, title }: ViewProps) => (
    <NavItem to={route} activeStyle={{ color: 'red' }}>
        {title}
    </NavItem>
)
