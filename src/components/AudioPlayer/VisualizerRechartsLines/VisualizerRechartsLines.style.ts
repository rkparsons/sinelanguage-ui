import styled from 'styled-components'

export const Visualisation = styled.div`
    ${({ theme }) => `    
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        padding-right: ${theme.spacing(6)};

        svg {
            filter: none;
        }
    `}
`
