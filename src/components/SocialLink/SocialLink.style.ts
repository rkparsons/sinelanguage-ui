import { Icon } from '@material-ui/core'
import styled from 'styled-components'

export const SocialIcon = styled(Icon)`
    ${({ theme }) => `
        width: ${theme.spacing(10)};
        text-align: center;
        color: black;
        &:hover {
            color: red;
        }
    `}
`
