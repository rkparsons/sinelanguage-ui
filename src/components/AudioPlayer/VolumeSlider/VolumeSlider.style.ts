import styled from 'styled-components'
import { volumeSliderWidth } from '~/styles/sizes'

export const ClickContainer = styled.div`
    width: ${({ theme }) => theme.spacing(volumeSliderWidth)};
    height: 100%;
`

export const SVG = styled.svg<{ isVisible: boolean }>`
    cursor: pointer;
    filter: drop-shadow(1px 1px 1px #000000);
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: opacity 0.5s;
`

export const Bar = styled.rect<{ isActive: boolean }>`
    width: 100%;
    fill: ${({ isActive }) => (isActive ? 'white' : '#cdcdcd')};
`
