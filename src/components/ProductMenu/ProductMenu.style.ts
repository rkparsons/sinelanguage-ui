import { Menu as MuiMenu } from '@material-ui/core'
import styled from 'styled-components'

export const Menu = styled(MuiMenu)`
    .MuiMenu-paper {
        background-color: rgba(255, 255, 255, 0.8);

        @supports (backdrop-filter: blur(12px)) {
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(12px);
        }
    }
`

export const BagIconContainer = styled.span<{ isInBag: boolean }>`
    ${({ theme, isInBag }) =>
        isInBag &&
        `
            svg:not(:hover) {
                color: ${theme.palette.secondary.main};
            }
        `}
`
