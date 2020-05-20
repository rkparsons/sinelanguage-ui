import { marginSide, marginTop } from '~/styles/sizes'

import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0);
    pointer-events: none;

    ${({ theme }) => `
        padding-top: ${theme.spacing(marginTop)};
        padding-left: ${theme.spacing(marginSide)};
        padding-right: ${theme.spacing(marginSide)};
    `}
`

export const ToggleMobileMenu = styled.div`
    ${({ theme }) => `
        pointer-events: all;

        svg {
            width: ${theme.spacing(7.5)};
            height: ${theme.spacing(7.5)};
        }
    `}
`
