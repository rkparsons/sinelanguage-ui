import { Box, Theme } from '@material-ui/core'

import styled from 'styled-components'

type AudioPlayerProps = {
    theme: Theme
}

export const AudioPlayer = styled(Box)`
    ${({ theme }: AudioPlayerProps) => `      
        position: fixed;
        z-index: 1000;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        padding: ${theme.spacing(5)};
        padding-bottom: 0;
    `}
`

export const Artwork = styled(Box)`
    cursor: pointer;
    position: relative;
`

export const Visualisation = styled(Box)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3000;
    background-color: white;
    opacity: 0.5;
`
