import { Box, Grid } from '@material-ui/core'

import styled from 'styled-components'

export const TimeControl = styled(Grid)`
    ${({ theme }) => `
        height: 100%;
        padding-bottom: ${theme.spacing(1)};
    `}
`

export const Visualisation = styled(Box)`
    position: absolute;
    pointer-events: none;
    z-index: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`
