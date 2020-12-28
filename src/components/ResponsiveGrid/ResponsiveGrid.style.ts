import { Grid as MuiGrid } from '@material-ui/core'
import styled from 'styled-components'

type GridProps = {
    isDesktop: boolean
}

export const Grid = styled(MuiGrid)<GridProps>`
    ${({ theme, isDesktop }) => `
        display: ${isDesktop ? 'none' : 'initial' };

        ${theme.breakpoints.up('md')} {
            display: ${isDesktop ? 'initial' : 'none' };
        }
    `}
`
