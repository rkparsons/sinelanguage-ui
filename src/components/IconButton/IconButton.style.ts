import { darkShadow, lightShadow } from '~/styles/shadows'

import styled from 'styled-components'

// todo: move all light dark shadow/colour logic to single place
export const Button = styled.span<{ isLight: boolean; isDisabled: boolean }>`
    display: flex;
    p {
        display: inline-block;
    }
    svg {
        display: inline-block;
        margin-right: ${({ theme }) => theme.spacing(0.5)};

        path {
            stroke: black;
            @supports (filter: blur(12px)) {
                stroke: none;
            }
        }
    }

    ${({ isLight, isDisabled }) => `    
        cursor: ${isDisabled ? 'auto' : 'pointer'};
        color: ${isLight ? 'white' : 'black'};
        opacity: ${isDisabled ? 0.3 : 1};
        text-shadow: ${isLight ? darkShadow : lightShadow};

        svg {
            filter: drop-shadow(${isLight ? darkShadow : lightShadow});
        }

        ${
            !isDisabled &&
            `&:hover {
                color: ${isLight ? 'black' : 'white'};
                text-shadow: ${isLight ? lightShadow : darkShadow};

                svg {
                    filter: drop-shadow(${isLight ? lightShadow : darkShadow});
                }
            }
            &:active {
                color: black !important;
                text-shadow: none !important;

                svg {
                    filter: none !important;
                }
            }`
        }
    `}
`
