import { darkShadow, lightShadow } from '~/styles/shadows'

import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const Row = styled(Grid)`
    ${({ theme }) => `
        height: ${theme.spacing(7.6)};
    `}
`

export const CartButton = styled.button`
    cursor: pointer;
    background: none;
    padding: 0;
    box-shadow: none;
    border: none;
    outline: none;
    text-shadow: none;
    color: white;
    text-shadow: ${darkShadow};

    &:hover {
        color: black;
        text-shadow: ${lightShadow};
    }

    h3 {
        display: inline-block;
        pointer-events: all;
    }
`
