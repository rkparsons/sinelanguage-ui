import { marginSide } from '~/styles/sizes'
import styled from 'styled-components'

export const Date = styled.span`
    display: inline-block;

    ${({ theme }) => `   
            width: ${theme.spacing(50)};
    `}
`

export const Location = styled.div`
    ${({ theme }) => `  
        padding-left: ${theme.spacing(marginSide)};  

        ${theme.breakpoints.up('md')} {
            padding-left: 0;
        }
    `}
`
