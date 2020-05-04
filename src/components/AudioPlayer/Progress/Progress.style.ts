import styled from 'styled-components'

export const BarContainer = styled.div`
    position: relative;
    width: 100%;
    height: 4px;
    cursor: pointer;
`

export const ProgressBar = styled.div`
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(12px) invert(100%);
    width: 100%;
    height: 100%;
`

export const PlayedBar = styled.div<{ width: number }>`
    ${({ width }) => `   
        pointer-events: none;
        position: absolute;
        z-index: 3000;
        top:0;
        left:0;
        width: ${width}%;
        height: 100%;
        background-color: rgb(17, 194, 32);
    `}
`
