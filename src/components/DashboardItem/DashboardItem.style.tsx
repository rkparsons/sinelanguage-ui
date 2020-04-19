import { Box, BoxProps, Theme } from '@material-ui/core'

import React from 'react'
import styled from 'styled-components'

type DashboardItemProps = BoxProps & {
    theme: Theme
    widthMultiplier: number
}

export const DashboardItem = styled(({ widthMultiplier, ...rest }: DashboardItemProps) => (
    <Box {...rest} />
))`
    ${({ theme, widthMultiplier }: DashboardItemProps) => `
    width: 100vw;
    ${theme.breakpoints.only('sm')} {
        width: ${(widthMultiplier * 100) / 2}vw;
    }
    ${theme.breakpoints.only('md')} {
        width: ${(widthMultiplier * 100) / 3}vw;
    }
    ${theme.breakpoints.only('lg')} {
        width: ${(widthMultiplier * 100) / 5}vw;
    }
    ${theme.breakpoints.only('xl')} {
        width: ${(widthMultiplier * 100) / 6}vw;
    }
    `}
`

export const DashboardItemInfo = styled(Box)`
    ${({ theme }) => `
        min-height: ${theme.spacing(20)};
    `}
`
