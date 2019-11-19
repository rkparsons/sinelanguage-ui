import React, { useMemo } from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { Location } from '@reach/router'
import '../styles/index.scss'
import styles from './index.module.scss'
import { Flipper } from 'react-flip-toolkit'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'

const Layout = props => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    const theme = useMemo(
        () =>
            responsiveFontSizes(
                createMuiTheme({
                    palette: {
                        type: prefersDarkMode ? 'dark' : 'light',
                        primary: indigo,
                        secondary: pink,
                        error: red,
                        contrastThreshold: 3,
                        tonalOffset: 0.2,
                    },
                })
            ),
        [prefersDarkMode]
    )

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Location>
                {({ location }) => (
                    <Flipper
                        flipKey={location.pathname}
                        spring="veryGentle"
                        decisionData
                        staggerConfig={{
                            default: {
                                speed: 0.5,
                            },
                            namedStagger: { speed: 0.2 },
                        }}
                    >
                        <App {...props} />
                    </Flipper>
                )}
            </Location>
        </ThemeProvider>
    )
}

const App = ({ children }) => (
    <div className={styles.container}>
        <div className={styles.content}>
            <Navigation />
            <hr />
            {children}
        </div>
        <Footer />
    </div>
)

export default Layout
