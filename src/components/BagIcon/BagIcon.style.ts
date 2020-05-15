import { darkShadow, lightShadow } from '~/styles/shadows'

import styled from 'styled-components'

export const IconContainer = styled.span<{ isLarge: boolean }>`
    svg {
        display: block;
        width: ${({ isLarge }) => (isLarge ? 2 : 1)}em;
        height: ${({ isLarge }) => (isLarge ? 2 : 1)}em;
    }
`
