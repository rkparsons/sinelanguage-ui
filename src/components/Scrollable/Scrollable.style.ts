import { contentOffset, marginSide } from '~/styles/sizes'

import styled from 'styled-components'

export const Scrollable = styled.div`
    ${({ theme }) => `    
        padding-top: ${theme.spacing(contentOffset)};
        padding-bottom: ${theme.spacing(20)};
        height: 100vh;
        overflow: scroll;
    `}
`
