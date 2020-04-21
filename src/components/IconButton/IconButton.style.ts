import styled from 'styled-components'

export const Button = styled.span`
    ${({ theme }) => `
        cursor: pointer;
        width: ${theme.spacing(50)};

        &:hover {
            color: green;
        }
    `}
`
