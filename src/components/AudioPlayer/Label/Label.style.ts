import styled from 'styled-components'

export const Label = styled.div`
    position: relative;
    z-index: 1000;
    white-space: nowrap;

    * {
        overflow: hidden;
        text-overflow: ellipsis;
    }
`
