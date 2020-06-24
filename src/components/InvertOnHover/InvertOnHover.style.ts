import { lightShadow } from '~/styles/shadows'
import styled from 'styled-components'

export const InvertOnHover = styled.div`
    color: white;

    &:hover {
        text-shadow: ${lightShadow};
        color: black;
    }
`
