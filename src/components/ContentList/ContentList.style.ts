import { contentOffsetSmall, marginSide } from '~/styles/sizes'

import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const List = styled.div`
    ${({ theme }) => `
        padding-top: ${theme.spacing(contentOffsetSmall)};
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
