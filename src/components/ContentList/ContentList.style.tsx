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
    `}
`

export const RowTitle = styled(Box)`
    ${({ theme }) => `    
        margin-left: ${theme.spacing(marginSide)};
    `}
`

type BlurLayerProps = {
    width: number
    height: number
    offset: number
}

export const BlurLayer = styled(({ width, height, offset, ...rest }: BlurLayerProps) => (
    <Box {...rest} />
))`
    ${({ width, height, offset }: BlurLayerProps) => `
        position: fixed;
        z-index: 100;
        width: ${width}px;
        height: ${height}px;
        margin-top: ${offset}px;
        background-color: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(12px);
    `}
`

type InvertLayerProps = {
    theme: Theme
    width: number
    children: ReactNode
}

export const InvertLayer = styled(({ width, children, ...rest }: InvertLayerProps) => (
    <Box {...rest}>{children}</Box>
))`
    ${({ theme, width }: InvertLayerProps) => `
        text-align: right;
        width: ${width}px;
        padding-top: ${theme.spacing(listRowPadding)};
        padding-bottom: ${theme.spacing(listRowPadding)};
        ${Row}:hover & {
            text-shadow: 1px 2px 4px #ffffff;
            color: black;
            background-color: rgba(255, 255, 255, 0);
            backdrop-filter: invert(100%);
        }
    `}
`

export const InvertBlurLayer = styled(InvertLayer)`
    ${({ theme }) => `
        text-align: left;
        padding-top: ${theme.spacing(listRowPadding)};
        padding-bottom: ${theme.spacing(listRowPadding)};
        ${Row}:hover & {
            text-shadow: 1px 2px 4px #ffffff;
            backdrop-filter: blur(7px) invert(100%);
        }
    `}
`

type FocusImageProps = {
    height: number
    offset: number
    children: ReactNode
}

export const FocusImage = styled(({ height, offset, children, ...rest }: FocusImageProps) => (
    <Box {...rest}>{children}</Box>
))`
    ${({ height, offset }: FocusImageProps) => `
        position: fixed;
        z-index: 100;
        left: ${offset}px;
        width: ${height}px;
        height: ${height}px;
        top: 0;
    `}
`
