import { marginSide } from '~/styles/sizes'
import styled from 'styled-components'

export const ReleaseId = styled.span`
    display: inline-block;

    ${({ theme }) => `   
            width: ${theme.spacing(40)};
    `}
`

export const Format = styled.div`
    ${({ theme }) => `  
        padding-left: ${theme.spacing(marginSide)};  

        ${theme.breakpoints.up('md')} {
            padding-left: 0;
        }
    `}
`
