import { contentOffsetSmall, marginSide } from '~/styles/sizes'

import { Typography } from '@material-ui/core'
import styled from 'styled-components'

export const Contact = styled.div`
    ${({ theme }) => `
        padding-top: ${theme.spacing(contentOffsetSmall)};
        padding-left: ${theme.spacing(marginSide)};
        padding-right: ${theme.spacing(marginSide)};
    `}
`

export const ContactLineTitle = styled(Typography)`
    ${({ theme }) => `
        width: ${theme.spacing(60)};
    `}
`
