import '../styles/index.scss'

import React, { useEffect, useState } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { Flipper } from 'react-flip-toolkit'
import Footer from '../components/Footer'
import { Location } from '@reach/router'
import Navigation from '../components/Navigation'
import { ThemeProvider } from '@material-ui/core/styles'
import styles from './index.module.scss'
import theme from '../styles/theme'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const Layout = props => {
    const isUserPreferenceDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [isDarkMode, setIsDarkMode] = useState(isUserPreferenceDarkMode)

    useEffect(() => {
        setIsDarkMode(isUserPreferenceDarkMode)
    }, [isUserPreferenceDarkMode])

    return (
        <ThemeProvider theme={theme(isDarkMode)}>
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
                        <div className={styles.container}>
                            <div className={styles.content}>
                                <Navigation />
                                <hr />
                                {props.children}
                            </div>
                            <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                        </div>
                    </Flipper>
                )}
            </Location>
        </ThemeProvider>
    )
}

export default Layout
