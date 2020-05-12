import styled from 'styled-components'

export const Fade = styled.div<{ isVisible: boolean; durationMs: number }>`
    ${({ isVisible, durationMs }) => `    
        opacity: ${isVisible ? 1 : 0};
        transition: opacity ${durationMs}ms ease;
    `}
`
