import styled from 'styled-components'

export const Button = styled.span`
    cursor: pointer;
    display: table;

    &:hover {
        color: rgb(0, 0, 255);
    }

    &:active {
        color: rgb(0, 255, 0);
    }
`

export const IconContainer = styled.span`
    ${({ theme }) => `
        display: table-cell;
        vertical-align: middle;
        width: ${theme.spacing(5)};
        height: ${theme.spacing(5)};
        display: inline-block;
    `}
`
