import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'
import robotoWoff from '../fonts/Roboto.woff'
import robotoWoff2 from '../fonts/Roboto.woff2'

const robotoFontFace = {
    fontFamily: 'Roboto',
    fontDisplay: 'block',
    src: `
    local('Roboto'),
    local('Roboto-Regular'),
    url(${robotoWoff2}) format('woff2'),
    url(${robotoWoff}) format('woff')
  `,
    unicodeRange: 'U+000-5FF',
}

const palette = {
    primary: indigo,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
}

export default (isDarkMode = false) =>
    responsiveFontSizes(
        createMuiTheme({
            palette: {
                type: isDarkMode ? 'dark' : 'light',
                ...palette,
            },
            overrides: {
                MuiCssBaseline: {
                    '@global': {
                        '@font-face': [robotoFontFace],
                    },
                },
            },
        })
    )
