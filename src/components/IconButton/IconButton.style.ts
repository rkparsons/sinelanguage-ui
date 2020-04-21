import styled from 'styled-components'

export const Button = styled.span`
    ${({ theme }) => `
        cursor: pointer;
        position: relative;
        width: ${theme.spacing(50)};

        &:hover {
            color: rgb(0, 0, 255);
        }
    `}
`

export const IconContainer = styled.span`
    ${({ theme }) => `
        width: ${theme.spacing(5)};
        height: ${theme.spacing(5)};
    `}
`
