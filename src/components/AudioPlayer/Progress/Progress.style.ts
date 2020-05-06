import styled from 'styled-components'

export const BarContainer = styled.div`
    z-index: 1000;
    position: relative;
    width: 100%;
    height: 15px;
    cursor: pointer;
`

export const ProgressBar = styled.div`
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(12px) invert(100%);
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: -1px;
    left: 0;
`

export const PlayedBar = styled.div<{ width: number }>`
    ${({ width }) => `   
        pointer-events: none;
        position: absolute;
        z-index: 3000;
        bottom:-1px;
        left:0;
        width: ${width}%;
        height: 3px;
        background-color: rgb(17, 194, 32);
    `}
`
