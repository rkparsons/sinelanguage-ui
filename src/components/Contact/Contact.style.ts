import { contentOffsetSmall, marginSide } from '~/styles/sizes'

import styled from 'styled-components'

export const Contact = styled.div`
    ${({ theme }) => `
        padding-top: ${theme.spacing(contentOffsetSmall)};
        padding-left: ${theme.spacing(marginSide)};
        padding-right: ${theme.spacing(marginSide)};
    `}
`
