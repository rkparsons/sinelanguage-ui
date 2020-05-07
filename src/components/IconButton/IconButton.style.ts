import { Grid } from '@material-ui/core'
import { lightShadow } from '~/styles/shadows'
import styled from 'styled-components'

export const Button = styled(Grid)<{ isLight: boolean }>`
    cursor: pointer;

    svg {
        display: block;
    }

    ${({ isLight }) => `    
        color: ${isLight ? 'white' : 'black'};

        &:hover {
            color: ${isLight ? 'black' : 'rgb(0, 0, 255)'};
            text-shadow: ${isLight ? lightShadow : 'none'};

            svg {
                filter: ${isLight ? `drop-shadow(${lightShadow})` : 'none'};
            }
        }

        &:active {
            text-shadow: none;

            svg {
                filter: none;
            }
        }
    `}
`
