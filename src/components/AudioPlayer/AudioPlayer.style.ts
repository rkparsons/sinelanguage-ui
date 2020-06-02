import { marginSide, marginTop } from '~/styles/sizes'

import { PlayerState } from '~/constants/playerState'
import { darkShadow } from '~/styles/shadows'
import styled from 'styled-components'

export const AudioPlayer = styled.div<{ playerState: PlayerState; height: number }>`
    @keyframes slidein {
        from {
            bottom: -200px;
        }

        to {
            bottom: -1;
        }
    }
    animation-name: slidein;
    animation-duration: 0.2s;

    width: 100%;
    position: fixed;
    display: block;
    z-index: 1000;
    left: 0;

    ${({ playerState, height }) => `        
        bottom: ${
            playerState === PlayerState.CLOSED
                ? -height
                : playerState === PlayerState.MINIMISED
                ? -height / 2
                : -1
        }px;
    `}
    transition: bottom 0.2s ease;
`

export const PlayerBody = styled.div`
    color: white;
    background-color: rgba(255, 255, 255, 0.8);

    @supports (backdrop-filter: blur(12px)) {
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(12px);
    }

    text-shadow: ${darkShadow};

    ${({ theme }) => `    
        padding-top: ${theme.spacing(3)};
        padding-bottom: ${theme.spacing(2)};
        padding-left: ${theme.spacing(marginSide)};
        padding-right: ${theme.spacing(marginSide)};
        
        ${theme.breakpoints.up('md')} {
            padding-top: ${theme.spacing(marginTop)};
        }
    `}
`
export const PlayerPanel = styled.div`
    position: relative;
    height: 100%;

    ${({ theme }) => `   
        margin-left: ${theme.spacing(marginSide)};
    `}
`

export const ImageContainer = styled.div`
    ${({ theme }) => `   
        width: ${theme.spacing(27)};
    `}
`
