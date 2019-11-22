import { darkGrey, grey, lightGrey } from '../../styles/colours'

import { Link } from 'gatsby'
import { LinkProps } from '@reach/router'
import styled from 'styled-components'

interface Props {
    isActive: boolean
}

export default styled(Link)<Props & LinkProps<{}>>`
    font-size: 0.9rem;
    margin-right: 1.3rem;
    text-decoration: none;
    color: ${({ isActive }) => (isActive ? darkGrey : lightGrey)};

    &:hover {
        color: ${grey};
    }
`
