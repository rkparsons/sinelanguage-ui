import { darkGrey, grey, lightGrey } from '../../styles/colours'

import { Link } from 'gatsby'
import styled from 'styled-components'

export default styled(Link)`
    font-size: 0.9rem;
    margin-right: 1.3rem;
    text-decoration: none;
    color: ${({ isActive }) => (isActive ? darkGrey : lightGrey)};

    &:hover {
        color: ${grey};
    }
`
