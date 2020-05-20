import { darkShadow, lightShadow } from '~/styles/shadows'

import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const CheckoutButton = styled.div`
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

    svg {
        pointer-events: all;
    }
`
