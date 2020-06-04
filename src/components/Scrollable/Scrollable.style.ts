import { marginSide } from '~/styles/sizes'
import styled from 'styled-components'

export const Scrollable = styled.div<{ isWithMargin: boolean }>`
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    mask-image: linear-gradient(transparent 5%, rgba(0, 0, 0, 1) 15%);

    ${({ theme, isWithMargin }) => `  
        margin: 0 ${theme.spacing(isWithMargin ? marginSide : 0)};      
                
        ${theme.breakpoints.up('md')} {
            margin: 0;
            mask-image: linear-gradient(transparent 5%, rgba(0, 0, 0, 1) 20%);
            margin-right: ${theme.spacing(isWithMargin ? marginSide : 0)};
        }    

        ${theme.breakpoints.up('xl')} {
            mask-image: linear-gradient(transparent 5%, rgba(0, 0, 0, 1) 15%);
        }       
    `}
`
