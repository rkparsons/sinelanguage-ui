import { darkShadow, lightShadow } from '~/styles/shadows'
import { marginSide, marginTop } from '~/styles/sizes'

import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const Header = styled.header<{ isOverlay: boolean }>`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0);

    ${({ theme, isOverlay }) => `
        pointer-events: ${isOverlay ? 'all' : 'none'};
        padding-top: ${theme.spacing(marginTop)};
        padding-left: ${theme.spacing(marginSide)};
        padding-right: ${theme.spacing(marginSide)};
        backdrop-filter: ${isOverlay ? 'blur(12px)' : 'none'};
    `}
`

export const HeaderRow = styled(Grid)`
    ${({ theme }) => `
        height: ${theme.spacing(9)};
    `}
`
