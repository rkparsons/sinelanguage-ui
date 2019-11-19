import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'

export default (isDarkMode = false) =>
    responsiveFontSizes(
        createMuiTheme({
            palette: {
                type: isDarkMode ? 'dark' : 'light',
                primary: indigo,
                secondary: pink,
                error: red,
                contrastThreshold: 3,
                tonalOffset: 0.2,
            },
            typography: {
                fontFamily: 'Roboto',
            },
        })
    )
