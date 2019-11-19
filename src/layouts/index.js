import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/theme'
import useTheme from '../hooks/useTheme'
import { Location } from '@reach/router'
import '../styles/index.scss'
import styles from './index.module.scss'
import { Flipper } from 'react-flip-toolkit'

const Layout = props => (
    <ThemeProvider theme={useTheme(theme, true)}>
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
