import { darkShadow, lightShadow } from '~/styles/shadows'

import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const CheckoutButton = styled.div<{ isVisible: boolean }>`
    cursor: pointer;
    background: none;
    padding: 0;
    box-shadow: none;
    border: none;
    outline: none;
    text-shadow: none;
    color: white;
    text-shadow: ${darkShadow};
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

    &:hover {
        color: black;
        text-shadow: ${lightShadow};
    }

    h3,
    p {
        display: inline-block;
        pointer-events: all;
    }

    svg {
        pointer-events: all;
    }
`
