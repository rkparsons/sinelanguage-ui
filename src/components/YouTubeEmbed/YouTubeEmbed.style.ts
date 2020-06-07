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

export const Backdrop = styled.div<{ isPlaying: boolean }>`
    position: absolute;
    background-color: black;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 1.5s;

    pointer-events: ${({ isPlaying }) => (isPlaying ? 'all' : 'none')};
    opacity: ${({ isPlaying }) => (isPlaying ? 1 : 0)};

    ${({ theme }) => `            
        ${theme.breakpoints.up('md')} {            
            pointer-events: none;
            opacity: 0;
        }
    `}
`
