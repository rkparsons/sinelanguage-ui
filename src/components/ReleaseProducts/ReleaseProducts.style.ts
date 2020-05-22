import { Box, Grid } from '@material-ui/core'
import { darkShadow, lightShadow } from '~/styles/shadows'

import styled from 'styled-components'

export const ProductRow = styled(Box)`
    ${({ theme }) => `    
    `}
`

export const AddLabel = styled.span<{ price: string }>`

    &:after {
        content: '${({ price }) => price}';
    }

    ${ProductRow}:hover &:after {
        content: 'ADD';
    }
`
