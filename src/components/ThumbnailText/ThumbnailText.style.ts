import { Box } from '@material-ui/core'
import styled from 'styled-components'

export const TextContainer = styled(Box)`
    p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`
