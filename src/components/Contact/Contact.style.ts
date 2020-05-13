import { contentOffset, marginSide } from '~/styles/sizes'

import styled from 'styled-components'

export const Contact = styled.div`
    ${({ theme }) => `
        padding-top: ${theme.spacing(contentOffset)};
        padding-left: ${theme.spacing(marginSide)};
        padding-right: ${theme.spacing(marginSide)};
    `}
`
