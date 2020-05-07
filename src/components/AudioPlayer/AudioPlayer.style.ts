import { marginSide, marginTop } from '~/styles/sizes'

import { Box } from '@material-ui/core'
import { darkShadow } from '~/styles/shadows'
import styled from 'styled-components'

export const AudioPlayer = styled.div<{ isMinimised: boolean }>`
    @keyframes slidein {
        from {
            bottom: -200px;
        }

        to {
            bottom: -1;
        }
    }

    position: fixed;
    display: block;
    z-index: 1000;
    left: 0;
    bottom: ${({ isMinimised }) => (isMinimised ? -110 : -1)}px;
    width: 100%;
    transition: bottom 0.1s ease;
    animation-name: slidein;
    animation-duration: 0.2s;

    svg {
        filter: drop-shadow(${darkShadow});
    }
`

export const PlayerBody = styled.div`
    color: white;
    background-color: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(12px);
    text-shadow: ${darkShadow};

    ${({ theme }) => `    
        padding-top: ${theme.spacing(marginTop)};
        padding-left: ${theme.spacing(marginSide)};
        padding-right: ${theme.spacing(marginSide)};
    `}
`
export const AnalyserContainer = styled.div`
    ${({ theme }) => `    
        position: relative;
        height: 100%;
        margin-left: ${theme.spacing(marginSide)};
    `}
`
