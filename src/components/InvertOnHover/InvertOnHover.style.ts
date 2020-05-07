import { lightShadow } from '~/styles/shadows'
import styled from 'styled-components'

export const InvertOnHover = styled.div`
    &:hover {
        text-shadow: ${lightShadow};
        color: black;
        background-color: rgba(255, 255, 255, 0);
        backdrop-filter: invert(100%);
    }
`
