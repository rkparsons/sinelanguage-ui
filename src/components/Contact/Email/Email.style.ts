import { Typography } from '@material-ui/core'
import styled from 'styled-components'

export const Title = styled(Typography)`
    ${({ theme }) => `
        width: ${theme.spacing(60)};
    `}
`
