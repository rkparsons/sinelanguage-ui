import { Grid, TextField } from '@material-ui/core'

import styled from 'styled-components'

export const InputGrid = styled(Grid)`
    max-width: ${({ theme }) => theme.spacing(160)};
`

export const EmailInput = styled(TextField)`
    width: 100%;
`
