import { Box } from '@material-ui/core'
import { darkShadow } from '~/styles/shadows'
import { marginTop } from '~/styles/sizes'
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
    bottom: ${({ isMinimised }) => (isMinimised ? -100 : -1)}px;
    width: 100%;
    transition: bottom 0.1s ease;
    animation-name: slidein;
    animation-duration: 0.2s;

    svg {
        filter: drop-shadow(${darkShadow});
    }
`

export const PlayerBody = styled.div`
    ${({ theme }) => `    
        color: white;  
        background-color: rgba(255, 255, 255, 0.13);
        backdrop-filter: blur(12px);

        text-shadow: ${darkShadow};
        padding-left: ${theme.spacing(6)};
    `}
`

export const PaddedTop = styled(Box)`
    ${({ theme }) => `   
        padding-top: ${theme.spacing(marginTop)};
    `}
`

export const AnalyserContainer = styled.div`
    ${({ theme }) => `    
        position: relative;
        height: 100%;
        margin-left: ${theme.spacing(6)};
    `}
`

export const CloseButton = styled.div`
    ${({ theme }) => `    
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1000;
        padding-top: ${theme.spacing(1)};
        padding-right: ${theme.spacing(2)};
    `}
`
