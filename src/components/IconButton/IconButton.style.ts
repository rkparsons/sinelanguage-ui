import { darkShadow, lightShadow } from '~/styles/shadows'

import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const Button = styled(Grid)<{ isLight: boolean; isDisabled: boolean }>`
    svg {
        display: block;
    }

    ${({ isLight, isDisabled }) => `    
        cursor: ${isDisabled ? 'auto' : 'pointer'};
        color: ${isLight ? 'white' : 'black'};
        opacity: ${isDisabled ? 0.3 : 1};

        ${
            !isDisabled &&
            `&:hover {
                color: ${isLight ? 'black' : 'white'};
                text-shadow: ${isLight ? lightShadow : darkShadow};

                svg {
                    filter: drop-shadow(${isLight ? lightShadow : darkShadow});
                }
            }
            &:active {
                color: black !important;
                text-shadow: none !important;

                svg {
                    filter: none !important;
                }
            }`
        }
    `}
`
