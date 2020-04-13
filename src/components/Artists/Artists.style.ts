import { Box } from '@material-ui/core'
import styled from 'styled-components'

export const Artists = styled(Box)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 500;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
`
