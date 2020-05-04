import { marginTop } from '~/styles/sizes'
import styled from 'styled-components'

export const AudioPlayer = styled.div`
    position: fixed;
    z-index: 1000;
    left: 0;
    bottom: 0;
    width: 100%;
`

export const PlayerBody = styled.div`
    ${({ theme }) => `    
        color: white;  
        background-color: rgba(255, 255, 255, 0.13);
        backdrop-filter: blur(12px);

        svg {
            filter: drop-shadow( 2px 2px 2px #000000);
        }
        text-shadow: 1px 2px 4px #000000;
        padding-top: ${theme.spacing(marginTop)};
        padding-left: ${theme.spacing(6)};
        padding-right: ${theme.spacing(6)};
    `}
`

export const AnalyserContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`
