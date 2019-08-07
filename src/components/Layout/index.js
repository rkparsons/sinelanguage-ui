import React, { Component, Fragment } from 'react'
import Footer from '../Footer'
import Navigation from '../Navigation'
import '../../styles/index.scss'
import styles from './index.module.scss'

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <App {...this.props} />
            </Fragment>
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
