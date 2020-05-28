import { lightShadow } from '~/styles/shadows'
import styled from 'styled-components'

export const InvertOnHover = styled.div`
    color: white;

    &:hover {
        text-shadow: ${lightShadow};
        color: black;

        ${({ theme }) => `                
            ${theme.breakpoints.down('sm')} {
                background-color: rgba(255, 255, 255, 0);
                backdrop-filter: invert(100%);
            }
    `}
    }
`
