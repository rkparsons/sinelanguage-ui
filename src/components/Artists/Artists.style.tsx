import React, { ReactNode } from 'react'

import { Box } from '@material-ui/core'
import Image from 'gatsby-image'
import styled from 'styled-components'

export const Artists = styled(Box)`
    ${({ theme }) => `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 500;
        padding-top: ${theme.spacing(20)};
    `}
`

export const ArtistRow = styled(Box)`
    width: 100%;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
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
        background-color: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
    `}
`

type InvertLayerProps = {
    width: number
    children: ReactNode
}

export const InvertLayer = styled(({ width, children, ...rest }: InvertLayerProps) => (
    <Box {...rest}>{children}</Box>
))`
    ${({ width }: InvertLayerProps) => `
        width: ${width}px;
        ${ArtistRow}:hover & {
            color: black;
            background-color: rgba(255, 255, 255, 0);
            backdrop-filter: invert(100%);
        }
    `}
`

export const InvertBlurLayer = styled(InvertLayer)`
    ${ArtistRow}:hover & {
        backdrop-filter: blur(5px) invert(100%);
    }
`

type ArtistImageProps = {
    height: number
    offset: number
    children: ReactNode
}

export const ArtistImage = styled(({ height, offset, children, ...rest }: ArtistImageProps) => (
    <Box {...rest}>{children}</Box>
))`
    ${({ height, offset }: ArtistImageProps) => `
        position: fixed;
        z-index: 100;
        left: ${offset}px;
        width: ${height}px;
        height: ${height}px;
        top: 0;
    `}
`
