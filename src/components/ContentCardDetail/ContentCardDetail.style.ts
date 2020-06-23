import { marginSide } from '~/styles/sizes'
import styled from 'styled-components'

export const CardDetail = styled.div`
    ${({ theme }) => `
        height: ${theme.spacing(35)};
        padding: ${theme.spacing(3)};
        padding-left: ${theme.spacing(marginSide)};
    `}
`
