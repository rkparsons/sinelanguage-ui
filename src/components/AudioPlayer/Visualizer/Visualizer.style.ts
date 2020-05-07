import styled from 'styled-components'

export const Visualisation = styled.div<{ isVisible: boolean }>`
    svg {
        filter: none;
    }

    pointer-events: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: -1px;
    width: 100%;
    height: 100%;
    transition: opacity 0.2s;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`
