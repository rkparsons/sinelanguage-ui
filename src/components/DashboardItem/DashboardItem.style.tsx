import React, { FunctionComponent } from 'react'

import { Link } from 'gatsby'
import styled from 'styled-components'

type StyleProps = {
    isVisible: boolean
    to: string
}

const StyledLink: FunctionComponent<StyleProps> = ({ children, isVisible, ...rest }) => (
    <Link {...rest}>{children}</Link>
)

export default styled(StyledLink)`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`
