import { marginSide } from '~/styles/sizes'
import styled from 'styled-components'

export const Padding = styled.div<{ left: boolean; right: boolean }>`
    ${({ theme, left, right }) => `
        padding-left: ${theme.spacing(left ? marginSide : 0)};
        padding-right: ${theme.spacing(right ? marginSide : 0)};
    `}
`
