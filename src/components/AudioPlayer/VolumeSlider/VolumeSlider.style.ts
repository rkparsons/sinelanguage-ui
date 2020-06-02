import styled from 'styled-components'

export const ClickContainer = styled.div`
    height: 100%;
`

export const SVG = styled.svg`
    cursor: pointer;
    filter: drop-shadow(1px 1px 1px #000000);
`

export const Bar = styled.rect<{ isActive: boolean }>`
    width: 100%;
    fill: ${({ isActive }) => (isActive ? 'white' : 'grey')};
`
