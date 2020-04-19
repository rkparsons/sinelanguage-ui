import { Box, Theme } from '@material-ui/core'
import React, { ReactNode } from 'react'
import { listRowPadding, marginSide } from '~/styles/sizes'

import styled from 'styled-components'

export const List = styled(Box)`
    ${({ theme }) => `
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
    ${({ theme }) => `
        width: 100%;
        color: white;
        cursor: pointer;
        text-transform: uppercase;
        white-space: pre;
        text-align: left;
        padding-left: ${theme.spacing(marginSide)};
        padding-top: ${theme.spacing(listRowPadding)};
        padding-bottom: ${theme.spacing(listRowPadding)};
        &:hover {
            text-shadow: 1px 2px 4px #ffffff;
            color: black;
            background-color: rgba(255, 255, 255, 0);
            backdrop-filter: blur(7px) invert(100%);
        }
    `}
`

type BlurLayerProps = {
    height: number
    offset: number
}

export const BlurLayer = styled(({ height, offset, ...rest }: BlurLayerProps) => <Box {...rest} />)`
    ${({ height, offset }: BlurLayerProps) => `
        position: fixed;
        z-index: 100;
        width: 100%;
        height: ${height}px;
        margin-top: ${offset}px;
        background-color: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(12px);
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
    width: 80vh;
    height: 80vh;
`
