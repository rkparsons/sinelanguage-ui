import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

export default styled(({ children, isVisible, ...rest }) => <Link {...rest}>{children}</Link>)`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`
