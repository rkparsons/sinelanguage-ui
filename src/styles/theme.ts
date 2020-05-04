import './fonts/fontFace.css'

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

import palette from './palette'

// todo: use less font files
export default (isDarkMode = false) =>
    responsiveFontSizes(
        createMuiTheme({
            typography: {
                fontFamily: 'HelveticaNowText',
                allVariants: {},
                body1: {
                    fontSize: 16,
                    lineHeight: 1.3,
                },
                body2: {
                    fontSize: 28,
                    lineHeight: 1.25,
                },
                h3: {
                    fontSize: 32,
                },
                h1: {
                    fontSize: 59,
                },
            },
            spacing: (factor) => `${0.25 * factor}rem`,
            palette: {
                type: isDarkMode ? 'dark' : 'light',
                ...palette,
            },
            overrides: {
                MuiInputBase: {
                    input: {
                        color: 'white',
                        textShadow: '1px 2px 4px #000000',
                    },
                },
                MuiInputLabel: {
                    root: {
                        color: 'white',
                    },
                },
                MuiSlider: {
                    rail: {
                        boxShadow: '1px 2px 4px #000000',
                    },
                    thumb: {
                        boxShadow: '1px 2px 4px #000000 !important',
                    },
                },
            },
        })
    )
