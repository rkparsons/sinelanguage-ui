import { darkShadow, lightShadow } from '~/styles/shadows'

import styled from 'styled-components'

export const Controls = styled.div`
    ${({ theme }) => `            
        padding-top: 0;

        ${theme.breakpoints.up('md')} {
            padding-top: ${theme.spacing(2)};
        }
    `}
`

export const SliderContainer = styled.div`
    margin-top: -6px;

    .MuiSlider-thumb {
        width: 9px;
        height: 9px;
        margin-top: -4px;
        box-shadow: ${darkShadow};
    }

    .MuiSlider-rail {
        box-shadow: ${darkShadow};
    }

    &:hover {
        .MuiSlider-thumb {
            color: black;
            box-shadow: ${lightShadow};
        }
    }

    .MuiSlider-active {
        color: black;
    }

    .MuiSlider-thumb::after {
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
    }
`
