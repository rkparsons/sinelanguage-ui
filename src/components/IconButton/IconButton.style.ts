import { darkShadow, lightShadow } from '~/styles/shadows'

import styled from 'styled-components'

// todo: move all light dark shadow/colour logic to single place
export const Button = styled.span<{
    isLight: boolean
    isDisabled: boolean
    isInactiveShadow: boolean
    disabledOpacity: number
}>`
    h3 {
        text-align: center;
    }

    ${({ isLight, isDisabled, isInactiveShadow, disabledOpacity }) => `    
        cursor: ${isDisabled ? 'auto' : 'pointer'};
        color: ${isLight ? 'white' : 'black'};
        opacity: ${isDisabled ? disabledOpacity : 1};
        * {            
            opacity: ${isDisabled ? disabledOpacity : 1};
        }

        text-shadow: ${!isInactiveShadow ? 'none' : isLight ? darkShadow : lightShadow};        

        ${
            !isDisabled &&
            `&:hover {
                color: ${isLight ? 'black' : 'white'};
                text-shadow: ${isLight ? lightShadow : darkShadow};
            }
            &:active {
                color: black !important;
                text-shadow: none !important;
            }`
        }
    `}
`
