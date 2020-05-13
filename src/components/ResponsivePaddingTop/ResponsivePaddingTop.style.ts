import { contentOffsetDesktop, contentOffsetMobile } from '~/styles/sizes'

import styled from 'styled-components'

export const ResponsivePaddingTop = styled.div`
    ${({ theme }) => `    
        padding-top: ${theme.spacing(contentOffsetMobile)};
                
        ${theme.breakpoints.up('sm')} {
        padding-top: ${theme.spacing(contentOffsetDesktop)};
        }
    `}
`
