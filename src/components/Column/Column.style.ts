import styled from 'styled-components'

type CardProps = {
    widthMultiplier: number
}

export const ResponsiveColumn = styled.div<CardProps>`
    ${({ theme, widthMultiplier }) => `
        width: 100vw;
        ${theme.breakpoints.up('sm')} {
            width: ${(widthMultiplier * 100) / 2}vw;
        }
        ${theme.breakpoints.up('md')} {
            width: ${(widthMultiplier * 100) / 4}vw;
        }
        @media (min-width: 1800px) {
            width: ${(widthMultiplier * 100) / 5}vw;
        }
        ${theme.breakpoints.up('xl')} {
            width: ${(widthMultiplier * 100) / 6}vw;
        }
    `}
`
