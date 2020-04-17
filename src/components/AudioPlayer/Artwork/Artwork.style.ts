import { Box } from '@material-ui/core'
import styled from 'styled-components'

export const Artwork = styled(Box)`
    cursor: pointer;
    position: relative;
`

export const Visualisation = styled(Box)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3000;
    background-color: white;
    opacity: 0;

    &:hover {
        opacity: 0.15;
    }
`
