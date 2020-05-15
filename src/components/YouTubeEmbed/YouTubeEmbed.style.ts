import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: ${(100 * 9) / 16}%;
    background: black;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

export const Backdrop = styled.div`
    position: absolute;
    background-color: black;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
