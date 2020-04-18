import { marginSide, marginTop } from '~/styles/sizes'

import styled from 'styled-components'

export const Header = styled.header`
    ${({ theme }) => `
        position: fixed;
        top: 0;
        z-index: 1000;
        margin-top: ${theme.spacing(marginTop)};
        margin-left: ${theme.spacing(marginSide)};
        margin-right: ${theme.spacing(marginSide)};
    `}
`
