import { contentOffset, marginSide } from '~/styles/sizes'

import styled from 'styled-components'

export const Scrollable = styled.div<{ isWithMargin: boolean }>`
    ${({ theme, isWithMargin }) => `    
        padding-top: ${theme.spacing(contentOffset)};
        height: 100vh;
        overflow: scroll;
        margin: 0 ${theme.spacing(isWithMargin ? marginSide : 0)};
                
        ${theme.breakpoints.up('lg')} {
            margin: 0;
            margin-right: ${theme.spacing(isWithMargin ? marginSide : 0)};
        }
    `}
`
