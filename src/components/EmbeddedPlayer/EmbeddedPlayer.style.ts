import styled from 'styled-components'

export const IFrame = styled.iframe`
    ${({ theme }) => `
        height: ${theme.spacing(50)};
        border: none;
    `}
`
