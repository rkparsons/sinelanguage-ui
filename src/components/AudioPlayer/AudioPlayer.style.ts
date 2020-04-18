import { Box, Theme } from '@material-ui/core'

import styled from 'styled-components'

type AudioPlayerProps = {
    theme: Theme
}

export const AudioPlayer = styled(Box)`
    ${({ theme }: AudioPlayerProps) => `    
        color: white;  
        position: fixed;
        z-index: 1000;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: black;
        padding: ${theme.spacing(5)};
        padding-bottom: 0;
    `}
`
