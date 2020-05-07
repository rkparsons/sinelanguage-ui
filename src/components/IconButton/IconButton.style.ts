import { Grid } from '@material-ui/core'
import { lightShadow } from '~/styles/shadows'
import { linkActive } from '~/styles/colours'
import styled from 'styled-components'

export const Button = styled(Grid)`
    cursor: pointer;
    color: white;

    &:hover {
        color: black;
        text-shadow: ${lightShadow};

        svg {
            filter: drop-shadow(${lightShadow});
        }
    }

    &:active {
        color: ${linkActive};
    }

    svg {
        display: block;
    }
`
