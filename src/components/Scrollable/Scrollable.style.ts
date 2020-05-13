import { marginSide } from '~/styles/sizes'
import styled from 'styled-components'

export const Scrollable = styled.div<{ isWithMargin: boolean }>`
    ${({ theme, isWithMargin }) => `    
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        margin: 0 ${theme.spacing(isWithMargin ? marginSide : 0)};      
                
        ${theme.breakpoints.up('lg')} {
            margin: 0;
            margin-right: ${theme.spacing(isWithMargin ? marginSide : 0)};
        }
    `}
`
