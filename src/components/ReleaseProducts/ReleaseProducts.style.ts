import { Box } from '@material-ui/core'
import styled from 'styled-components'

export const ProductRow = styled.div<{ isLarge: boolean }>`
    ${({ theme }) => theme.breakpoints.up('md')} {
        min-width: ${({ isLarge }) => (isLarge ? 300 : 200)}px;
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
