import { Box } from '@material-ui/core'
import styled from 'styled-components'

export const Controls = styled(Box)`
    ${({ theme }) => `            
        padding-top: 0;

        ${theme.breakpoints.up('md')} {
            padding-top: ${theme.spacing(2)};
        }
    `}
`
