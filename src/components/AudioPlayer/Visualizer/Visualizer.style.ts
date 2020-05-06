import styled from 'styled-components'

export const Visualisation = styled.div<{ isVisible: boolean }>`
    ${({ theme, isVisible }) => `    
        pointer-events: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        padding-right: ${theme.spacing(6)};

        svg {
            filter: none;
        }

        opacity: ${isVisible ? 1 : 0};
        transition: opacity 0.2s;
    `}
`
