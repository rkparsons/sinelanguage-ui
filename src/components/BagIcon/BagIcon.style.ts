import { darkShadow, lightShadow } from '~/styles/shadows'

import styled from 'styled-components'

export const IconContainer = styled.span<{ isLarge: boolean }>`
    svg {
        display: block;
        width: ${({ isLarge }) => (isLarge ? 1.6 : 0.95)}em;
        height: ${({ isLarge }) => (isLarge ? 1.6 : 0.95)}em;
    }
`
