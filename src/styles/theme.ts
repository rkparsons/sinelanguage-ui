import './fonts/fontFace.css'

import { createMuiTheme } from '@material-ui/core/styles'
import { darkShadow } from './shadows'
import palette from './palette'
import { responsiveFont } from '~/utils/font'

export default () =>
    createMuiTheme({
        typography: {
            fontFamily: 'HelveticaNowText',
            allVariants: {
                wordWrap: 'break-word',
                lineHeight: 1.3,
            },
            body1: { ...responsiveFont(15, 15, 13.5, 14, 15) },
            h5: responsiveFont(18, 23, 18, 20, 21),
            h3: responsiveFont(20, 25, 19, 23, 25),
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
            MuiPopover: {
                paper: {
                    boxShadow: 'none',
                },
            },
        },
    })
