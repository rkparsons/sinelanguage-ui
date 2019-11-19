import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { Location } from '@reach/router'
import '../styles/index.scss'
import styles from './index.module.scss'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Flipper } from 'react-flip-toolkit'

class Layout extends Component {
    render() {
        const theme = createMuiTheme()

        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
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
                                <App {...this.props} />
                            </Flipper>
                        )}
                    </Location>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
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
