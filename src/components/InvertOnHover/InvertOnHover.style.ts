import styled from 'styled-components'

export const InvertOnHover = styled.div`
    &:hover {
        text-shadow: 1px 2px 4px #ffffff;
        color: black;
        background-color: rgba(255, 255, 255, 0);
        backdrop-filter: invert(100%);
    }
`
