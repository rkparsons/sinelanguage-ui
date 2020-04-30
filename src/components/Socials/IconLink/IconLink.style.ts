import { Icon } from '@material-ui/core'
import styled from 'styled-components'

export const SocialIcon = styled(Icon)`
    ${({ theme }) => `
        width: ${theme.spacing(10)};
        height: ${theme.spacing(10)};
        text-align: center;
        
        &:hover {
            color: rgb(0, 0, 255);
        }

        &:active {
            color: rgb(0, 255, 0);
        }
    `}
`
