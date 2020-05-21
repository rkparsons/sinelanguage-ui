import { darkShadow, lightShadow } from '~/styles/shadows'

import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const AddLabel = styled.span<{ price: string }>`
    &:after {
        content: '${({ price }) => price}';
    }

    &:hover:after {
        content: 'ADD';
    }
`
