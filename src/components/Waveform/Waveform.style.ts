import { Box, BoxProps, Icon, Theme } from '@material-ui/core'

import styled from 'styled-components'

export const Player = styled(Box)`
    .react-waves {
        width: 100%;
        padding: 0;
        position: relative;
        cursor: pointer;
        pointer-events: all;
    }
`

export const WaveContainer = styled(Box)`
    ${({ theme }: { theme: Theme }) => `        
        position: relative;
        &:after {
            content: ' ';
            background-color: ${theme.palette.background.default};
            opacity: 0.5;
            position: absolute;
            display: block;
            width: 100%;
            top: 0;
            left: 0;
            height: 100%;
            border-radius: 10px;
            z-index: 10;
            pointer-events: none;
            transition: opacity 0.1s linear;
        }

        &:hover {
            &:after {
                content: ' ';
                opacity: 0;
            }
        }
    `}
`
