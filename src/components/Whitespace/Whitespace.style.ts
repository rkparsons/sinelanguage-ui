import styled from 'styled-components'

export const Container = styled.span<{ whitespace: string }>`
    white-space: ${({ whitespace }) => whitespace};
`
