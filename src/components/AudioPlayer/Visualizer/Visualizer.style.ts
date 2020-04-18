import { Box } from '@material-ui/core'
import styled from 'styled-components'

export const Visualisation = styled(Box)`
    pointer-events: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

export const Canvas = styled.canvas`
    width: 100%;
    height: 100%;
`
