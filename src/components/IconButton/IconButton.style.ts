import { linkActive, linkHover } from '~/styles/colours'

import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const Button = styled(Grid)`
    cursor: pointer;

    &:hover {
        color: ${linkHover};
    }

    &:active {
        color: ${linkActive};
    }

    svg {
        display: block;
    }
`
