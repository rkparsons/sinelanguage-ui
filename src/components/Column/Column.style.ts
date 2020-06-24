import { columns } from '~/styles/sizes'
import styled from 'styled-components'

type CardProps = {
    widthMultiplier: number
}

export const ResponsiveColumn = styled.div<CardProps>`
    ${({ theme, widthMultiplier }) => `
        width: 100vw;
        ${theme.breakpoints.up('sm')} {
            width: ${(widthMultiplier * 100) / columns['sm']}vw;
        }
        ${theme.breakpoints.up('md')} {
            width: ${(widthMultiplier * 100) / columns['md']}vw;
        }
        ${theme.breakpoints.up('lg')} {
            width: ${(widthMultiplier * 100) / columns['lg']}vw;
        }
        ${theme.breakpoints.up('xl')} {
            width: ${(widthMultiplier * 100) / columns['xl']}vw;
        }
    `}
`
