import { Box, Grid } from '@material-ui/core'

import styled from 'styled-components'

export const TimeControl = styled(Grid)`
    ${({ theme }) => `
        height: 100%;
        padding-bottom: ${theme.spacing(1)};
    `}
`
