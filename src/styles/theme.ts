import './fonts/fontFace.css'

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

import palette from './palette'

// todo: use less font files
export default (isDarkMode = false) =>
    responsiveFontSizes(
        createMuiTheme({
            typography: {
                fontFamily: 'HelveticaNowText',
                allVariants: {
                    fontWeight: 500,
                },
                body1: {
                    fontSize: 22,
                    lineHeight: 1.2,
                    letterSpacing: -0.13,
                },
                body2: {
                    fontSize: 12,
                    lineHeight: 'normal',
                    letterSpacing: 'normal',
                },
                h3: {
                    fontSize: 28,
                    lineHeight: 1,
                    letterSpacing: -0.93,
                },
                h1: {
                    fontSize: 59,
                    lineHeight: 1.1,
                    letterSpacing: -0.52,
                },
            },
            spacing: (factor) => `${0.25 * factor}rem`,
            palette: {
                type: isDarkMode ? 'dark' : 'light',
                ...palette,
            },
        })
    )
