import { lightShadow } from '~/styles/shadows'
import styled from 'styled-components'

export const Link = styled.a`
    cursor: pointer;
    color: white;
    display: block;
    width: auto;

    &:hover {
        color: black;
        text-shadow: ${lightShadow};

        svg {
            filter: drop-shadow(${lightShadow});
        }
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
