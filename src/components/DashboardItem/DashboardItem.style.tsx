import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

export const LinkShowHide = styled(({ children, isVisible, ...rest }) => (
    <Link {...rest}>{children}</Link>
))`
    width: 300px;
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`
