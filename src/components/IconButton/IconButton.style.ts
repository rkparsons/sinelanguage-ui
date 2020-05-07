import { darkShadow, lightShadow } from '~/styles/shadows'

import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const Button = styled(Grid)<{ isLight: boolean }>`
    cursor: pointer;

    svg {
        display: block;
    }

    &:active {
        color: black !important;
        text-shadow: none !important;

        svg {
            filter: none !important;
        }
    }

    ${({ isLight }) => `    
        color: ${isLight ? 'white' : 'black'};

        &:hover {
            color: ${isLight ? 'black' : 'white'};
            text-shadow: ${isLight ? lightShadow : darkShadow};

            svg {
                filter: drop-shadow(${isLight ? lightShadow : darkShadow});
            }
        }
    `}
`
