import React, { Component } from 'react'
import Footer from '../Footer'
import Navigation from '../Navigation'
import { Location } from '@reach/router'
import '../../styles/index.scss'
import styles from './index.module.scss'
import { Flipper } from 'react-flip-toolkit'

class Layout extends Component {
    render() {
        return (
            <Location>
                {({ location }) => (
                    <Flipper flipKey={location.pathname}>
                        <App {...this.props} />
                    </Flipper>
                )}
            </Location>
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
