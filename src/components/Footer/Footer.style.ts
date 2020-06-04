import { darkShadow } from '~/styles/shadows'
import styled from 'styled-components'

export const Footer = styled.footer`
    padding: ${({ theme }) => theme.spacing(2)};
    padding-top: ${({ theme }) => theme.spacing(20)};
    text-shadow: ${darkShadow};
    color: white;
`
