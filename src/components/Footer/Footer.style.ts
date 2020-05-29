import { darkShadow } from '~/styles/shadows'
import styled from 'styled-components'

export const Footer = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    padding: ${({ theme }) => theme.spacing(2)};
    text-shadow: ${darkShadow};
    color: white;
`
