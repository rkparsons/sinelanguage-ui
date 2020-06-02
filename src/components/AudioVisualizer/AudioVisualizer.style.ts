import { marginSide, volumeSliderWidth } from '~/styles/sizes'

import styled from 'styled-components'

export const Visualisation = styled.div`
    svg {
        filter: none;
    }

    pointer-events: none;
    position: absolute;
    top: 0;
    left: -1px;
    width: 100%;
    height: 100%;
    padding-right: ${({ theme }) => theme.spacing(volumeSliderWidth + marginSide)};
`
