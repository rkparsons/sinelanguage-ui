import { marginSide, marginTop } from '~/styles/sizes'

import { Grid } from '@material-ui/core'
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

        svg {
            width: ${theme.spacing(7.5)};
            height: ${theme.spacing(7.5)};
        }
    `}
`

export const Title = styled.div`
    ${({ theme }) => `
        padding-left: ${theme.spacing(marginSide)};
    `}
`
