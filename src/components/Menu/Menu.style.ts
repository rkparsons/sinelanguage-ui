import { marginSide } from '~/styles/sizes'
import styled from 'styled-components'

export const Menu = styled.div`
    ${({ theme }) => `
        padding-left: ${theme.spacing(marginSide)};
        padding-right: ${theme.spacing(marginSide)};
    `}
`
