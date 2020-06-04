import './fonts/fontFace.css'

import { createMuiTheme } from '@material-ui/core/styles'
import { darkShadow } from './shadows'
import palette from './palette'

// todo: use less font files
export default (isDarkMode = false) =>
    createMuiTheme({
        typography: {
            fontFamily: 'HelveticaNowText',
            allVariants: {
                wordWrap: 'break-word',
                lineHeight: 1.3,
            },
            body1: { ...responsiveFont(15, 15, 13.5, 14, 15) },
            h5: responsiveFont(18, 23, 18, 20, 21),
            h3: responsiveFont(20, 25, 20, 23, 25),
            h1: responsiveFont(22, 27, 22, 24, 25),
        },
        spacing: (factor) => `${0.25 * factor}rem`,
        palette: {
            type: 'light',
            ...palette,
        },
        overrides: {
            MuiInputBase: {
                input: {
                    color: 'white',
                    textShadow: darkShadow,
                },
            },
            MuiInputLabel: {
                root: {
                    color: 'white',
                },
            },
        },
    })

const responsiveFont = (xs: number, sm: number, md: number, lg: number, xl: number) => ({
    '@media (min-width:0px)': {
        fontSize: xs,
    },
    '@media (min-width:600px)': {
        fontSize: sm,
    },
    '@media (min-width:960px)': {
        fontSize: md,
    },
    '@media (min-width:1280px)': {
        fontSize: lg,
    },
    '@media (min-width:1920px)': {
        fontSize: xl,
    },
})
