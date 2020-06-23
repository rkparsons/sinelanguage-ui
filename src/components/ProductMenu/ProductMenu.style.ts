import styled from 'styled-components'

export const Popup = styled.div`
    all: revert;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3000;
`

export const ButtonContainer = styled.div<{ isBlur: boolean }>`
    filter: blur(${({ isBlur }) => (isBlur ? 6 : 0)}px);
`
