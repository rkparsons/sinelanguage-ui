import { Box, Theme } from '@material-ui/core'

import styled from 'styled-components'

type PlayerProps = {
    theme: Theme
}

export const WaveContainer = styled(Box)``

export const Player = styled(Box)`
    ${({ theme }: PlayerProps) => `      
        .react-waves {
            width: 100%;
            padding: 0;
            position: relative;
            cursor: pointer;
            pointer-events: all;
            canvas {
                opacity: 0.5;
            }
            &:hover {
                canvas {
                    opacity: 1;
                }
            }
        }  
    `}
`
