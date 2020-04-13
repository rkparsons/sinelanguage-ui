import { Box } from '@material-ui/core'
import React from 'react'
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
    cursor: pointer;
    text-transform: uppercase;
    &:hover {
        background-color: rgba(255, 255, 255, 0);
        backdrop-filter: blur(5px) invert(100%);
    }
`

type FilterLayerProps = {
    height: number
    offset: number
}

export const FilterLayer = styled(({ height, offset, ...rest }: FilterLayerProps) => (
    <Box {...rest} />
))`
    ${({ height, offset }: FilterLayerProps) => `
        position: fixed;
        z-index: 100;
        width: 100%;
        height: ${height}px;
        margin-top: ${offset}px;
        background-color: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
    `}
`
