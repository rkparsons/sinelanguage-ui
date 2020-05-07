import { linkActive, linkHover } from '~/styles/colours'

import styled from 'styled-components'

export const Link = styled.a`
    cursor: pointer;
    color: white;
    display: block;
    width: auto;

    &:hover {
        color: ${linkHover};
    }

    &:active {
        color: ${linkActive};
    }

    .MuiIcon-root {
        ${({ theme }) => `        
            width: ${theme.spacing(12)};
            height: ${theme.spacing(12)};
            padding-left: ${theme.spacing(1)};
        `}
    }

    svg {
        display: block;
    }
`
