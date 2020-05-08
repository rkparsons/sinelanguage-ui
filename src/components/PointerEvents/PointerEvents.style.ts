import styled from 'styled-components'

export const Container = styled.span<{ pointerEvents: string }>`
    pointer-events: ${({ pointerEvents }) => pointerEvents};
`
