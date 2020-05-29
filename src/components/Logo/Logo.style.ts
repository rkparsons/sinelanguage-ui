import styled from 'styled-components'

export const SVG = styled.svg`
    filter: drop-shadow(1px 1px 1.5px #000000);
    width: ${({ theme }) => theme.spacing(12)};
    height: ${({ theme }) => theme.spacing(12)};

    path {
        fill: white;
    }
`
