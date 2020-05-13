import { Box } from '@material-ui/core'
import styled from 'styled-components'

export const TrackRow = styled.div`
    cursor: pointer;
`

export const TrackNumber = styled.div`
    ${({ theme }) => `    
        width: ${theme.spacing(10)};
    `}
`
