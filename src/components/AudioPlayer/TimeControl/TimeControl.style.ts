import { Box, Grid } from '@material-ui/core'

import styled from 'styled-components'

export const TimeControl = styled(Grid)`
    ${({ theme }) => `
        height: 100%;
        padding-bottom: ${theme.spacing(1)};
    `}
`

export const Visualisation = styled(Box)`
    ${({ theme }) => `
        pointer-events: none;
        position: absolute;
        left: ${theme.spacing(45)};
        right: ${theme.spacing(5)};;
        top: 0;
        bottom: 0;
    `}
`
