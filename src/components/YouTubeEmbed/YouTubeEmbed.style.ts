import styled from 'styled-components'

export const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: ${(100 * 9) / 16}%;

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
    background-color: black;
    bottom: 0;
    width: 100%;
    height: 10%;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition-property: opacity;
    transition-duration: 0s;
    transition-delay: ${({ isVisible }) => (isVisible ? 0 : 1)}s;
`
