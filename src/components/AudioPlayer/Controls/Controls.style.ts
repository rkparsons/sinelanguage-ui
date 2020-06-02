import styled from 'styled-components'

export const Controls = styled.div`
    ${({ theme }) => `            
        padding-top: 0;

        ${theme.breakpoints.up('md')} {
            padding-top: ${theme.spacing(2)};
        }
    `}
`
