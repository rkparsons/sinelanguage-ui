import { Box } from '@material-ui/core'
import styled from 'styled-components'

export const TrackRow = styled(Box)`
    * {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const TrackNumber = styled.div`
    ${({ theme }) => `    
        width: ${theme.spacing(10)};
    `}
`
