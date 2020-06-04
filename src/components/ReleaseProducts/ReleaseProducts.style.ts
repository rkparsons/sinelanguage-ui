import { Box } from '@material-ui/core'
import styled from 'styled-components'

export const ProductRow = styled(Box)`
    ${({ theme }) => theme.breakpoints.up('md')} {
        min-width: 200px;
    }
`

export const AddLabel = styled.span<{ price: string }>`

    &:after {
        content: '${({ price }) => price}';
    }

    ${ProductRow}:hover &:after {
        content: 'ADD';
    }
`
