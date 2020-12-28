import styled from 'styled-components'

type LineBreakProps = {
    isDesktop: boolean
}

export const LineBreak = styled.br<LineBreakProps>`
    ${({ theme, isDesktop }) => `
        display: ${isDesktop ? 'none' : 'initial' };

        ${theme.breakpoints.up('md')} {
            display: ${isDesktop ? 'initial' : 'none' };
        }
    `}
`
