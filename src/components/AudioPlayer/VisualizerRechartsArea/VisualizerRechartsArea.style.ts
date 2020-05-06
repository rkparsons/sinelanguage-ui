import { Box } from '@material-ui/core'
import styled from 'styled-components'

export const Visualisation = styled(Box)`
    ${({ theme }) => `    
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        padding-right: ${theme.spacing(6)};

        svg {
            filter: none;
        }
    `}
`

export const SVG = styled.svg`
    width: 100%;
    height: 100%;
`
