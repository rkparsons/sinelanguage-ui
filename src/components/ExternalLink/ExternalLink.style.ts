import { linkActive, linkHover } from '~/styles/colours'

import styled from 'styled-components'

export const Link = styled.a`
    cursor: pointer;
    color: white;

    &:hover {
        color: ${linkHover};
    }

    &:active {
        color: ${linkActive};
    }

    svg {
        display: block;
    }
`
