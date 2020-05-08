import styled from 'styled-components'

export const Container = styled.span<{ whiteSpace: string }>`
    white-space: ${({ whiteSpace }) => whiteSpace};
`
