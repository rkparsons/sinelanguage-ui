import { contentOffset } from '~/styles/sizes'
import styled from 'styled-components'

export const Scrollable = styled.div`
    ${({ theme }) => `    
        padding-top: ${theme.spacing(contentOffset)};
        height: 100vh;
        overflow: scroll;
    `}
`
