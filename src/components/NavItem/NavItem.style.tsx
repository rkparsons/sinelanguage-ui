import { darkGrey, grey, lightGrey } from '../../styles/colours'

import { Link } from 'gatsby'
import { LinkProps } from '@reach/router'
import styled from 'styled-components'

export default styled(Link)`
    font-size: 0.9rem;
    margin-right: 1.3rem;
    text-decoration: none;
    color: ${lightGrey};

    &:hover {
        color: ${grey};
    }
`
