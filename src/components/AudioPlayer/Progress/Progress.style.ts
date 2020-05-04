import styled from 'styled-components'

export const ProgressBar = styled.div`
    width: 100%;
    height: 10px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: invert(100%);
`

export const PlayedBar = styled.div<{ width: number }>`
    ${({ width }) => `   
        width: ${width}%;
        height: 10px;
        background-color: green;
    `}
`
