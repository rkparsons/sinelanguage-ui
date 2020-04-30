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

export const Controls = styled.div<{ isVisible: boolean }>`
    position: absolute;
    background-color: white;
    border-top: 1px solid grey;
    color: grey;
    bottom: 0;
    width: 100%;
    height: 10%;
    text-shadow: none;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition-property: opacity;
    transition-duration: 0s;
    transition-delay: ${({ isVisible }) => (isVisible ? 0 : 1)}s;
`

export const ControlsGrid = styled(Grid)`
    height: 100%;
`
