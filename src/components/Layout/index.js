import React, { useEffect, useState } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from '../footer'
import Navigation from '../navigation'
import { ThemeProvider } from '@material-ui/core/styles'
import styles from './index.module.scss'
import theme from '../../styles/theme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import withFlipAnimation from '../withFlipAnimation'

const Layout = ({ children }) => {
    const isUserPreferenceDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [isDarkMode, setIsDarkMode] = useState(isUserPreferenceDarkMode)

    useEffect(() => {
        setIsDarkMode(isUserPreferenceDarkMode)
    }, [isUserPreferenceDarkMode])

    return (
        <ThemeProvider theme={theme(isDarkMode)}>
            <CssBaseline />

            <div className={styles.container}>
                <div className={styles.content}>
                    <Navigation />
                    <hr />
                    {children}
                </div>
                <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </div>
        </ThemeProvider>
    )
}

export default withFlipAnimation(Layout)
