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

export const Backdrop = styled.div<{ isVisible: boolean }>`
    position: absolute;
    background-color: black;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: opacity 1.5s;
`
