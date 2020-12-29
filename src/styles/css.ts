import { css } from 'styled-components'

type ResponsiveStylesProps = {
    isDesktop: boolean
}

export const responsiveStyles = css<ResponsiveStylesProps>`
    ${({ theme, isDesktop }) => `
        display: ${isDesktop ? 'none' : 'initial' };

        ${theme.breakpoints.up('md')} {
            display: ${isDesktop ? 'initial' : 'none' };
        }
    `}
`;