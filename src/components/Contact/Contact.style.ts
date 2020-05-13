import { marginSide } from '~/styles/sizes'
import styled from 'styled-components'

export const Contact = styled.div`
    ${({ theme }) => `
        padding-left: ${theme.spacing(marginSide)};
        padding-right: ${theme.spacing(marginSide)};
    `}
`
