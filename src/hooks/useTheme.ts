import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createTheme from '~/styles/theme'
import { useRef } from 'react'

export default () => {
    const theme = useRef<Theme>()

    if (!theme.current) {
        theme.current = createTheme()
    }

    return theme.current
}
