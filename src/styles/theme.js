import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
const defaultTheme = createMuiTheme()
const {
    breakpoints,
    typography: { pxToRem },
} = defaultTheme

export default responsiveFontSizes(
    createMuiTheme({
        overrides: {
            MuiTypography: {
                h1: {
                    fontSize: '5rem',
                    [breakpoints.down('xs')]: {
                        fontSize: '3rem',
                    },
                },
            },
        },
    })
)
