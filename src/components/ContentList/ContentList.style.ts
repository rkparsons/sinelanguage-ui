import { Box, Grid, Theme } from '@material-ui/core'

import { marginSide } from '~/styles/sizes'
import styled from 'styled-components'

export const List = styled(Box)`
    ${({ theme }: { theme: Theme }) => `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 500;
        padding-top: ${theme.spacing(32)};
        text-shadow: 1px 2px 4px #000000;
    `}
`

export const Row = styled(Box)`
    ${({ theme }: { theme: Theme }) => `
        width: 100%;
        color: white;
        cursor: pointer;
        text-transform: uppercase;
        white-space: pre;
        text-align: left;
        &:hover {
            text-shadow: 1px 2px 4px #ffffff;
            color: black;
            background-color: rgba(255, 255, 255, 0);
            backdrop-filter: invert(100%);            
        }
        h3 {
            padding-left: ${theme.spacing(marginSide)};
        }
    `}
`

export const FocusImage = styled(Box)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    margin: auto;
    width: 40vw;
    height: 40vw;
`
