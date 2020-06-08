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
    `}
`

export const Title = styled.div`
    ${({ theme }) => `
        padding-left: ${theme.spacing(marginSide)};
    `}
`

export const ToggleMobileMenu = styled.div`
    ${({ theme }) => `
        pointer-events: all;
        padding-right: ${theme.spacing(marginSide)};
    `}
`
