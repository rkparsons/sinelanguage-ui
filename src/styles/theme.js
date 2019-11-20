import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

import fontFace from './fontFace'
import palette from './palette'

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
                        '@font-face': [fontFace],
                    },
                },
            },
        })
    )
