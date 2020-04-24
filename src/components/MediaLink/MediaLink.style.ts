import styled from 'styled-components'

export const MediaLink = styled.div`
    position: relative;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0;

    &:hover {
        opacity: 0.4;
    }
`
