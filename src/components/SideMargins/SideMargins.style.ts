import { marginSide } from '~/styles/sizes'
import styled from 'styled-components'

export const SideMargins = styled.div`
    ${({ theme }) => `    
        margin: 0 ${theme.spacing(marginSide)};
    `}
`
