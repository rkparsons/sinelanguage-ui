import styled from 'styled-components'

export const Date = styled.span`
    display: inline-block;

    ${({ theme }) => `   
            width: ${theme.spacing(50)};
    `}
`
