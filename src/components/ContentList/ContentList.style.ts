import { Box, Grid, Theme } from '@material-ui/core'

import { marginSide } from '~/styles/sizes'
import styled from 'styled-components'

export const List = styled.div`
    ${({ theme }) => `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 500;
        padding-top: ${theme.spacing(32)};
        text-shadow: 1px 2px 4px #000000;
        color: white;
    `}
`

const Row = styled.div`
    ${({ theme }) => `
        width: 100%;
        color: white;
        white-space: pre;
        text-align: left;
        h3 {
            padding-left: ${theme.spacing(marginSide)};
            padding-right: ${theme.spacing(marginSide)};
        }
    `}
`

export const TitleRow = styled(Row)`
    ${({ theme }) => `
        margin-bottom: ${theme.spacing(5)};
    `}
`

export const ItemRow = styled(Row)`
    cursor: pointer;
`

export const HoverImage = styled(Grid)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    margin: auto;
    width: 100vw;
    height: 100vh;
    vertical-align: middle;
`
