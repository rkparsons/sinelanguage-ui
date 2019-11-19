import { useMemo } from 'react'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default theme => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    return useMemo(() => responsiveFontSizes(createMuiTheme(theme(prefersDarkMode))), [
        theme,
        prefersDarkMode,
    ])
}
