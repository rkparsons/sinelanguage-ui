import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const Button = styled(Grid)`
    cursor: pointer;

    &:hover {
        color: rgb(0, 0, 255);
    }

    &:active {
        color: rgb(0, 255, 0);
    }

    svg {
        display: block;
    }
`
