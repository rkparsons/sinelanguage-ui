import React, { Component } from 'react'
import Footer from '../Footer'
import Navigation from '../Navigation'
import getFirebase, { FirebaseContext } from '../Firebase'
import withAuthentication from '../Session/withAuthentication'
import '../../styles/index.scss'
import styles from './index.module.scss'

class Layout extends Component {
    state = {
        firebase: null,
    }

    componentDidMount() {
        const app = import('firebase/app')
        const auth = import('firebase/auth')
        const database = import('firebase/database')

        Promise.all([app, auth, database]).then(values => {
            const firebase = getFirebase(values[0])

            this.setState({ firebase })
        })
    }

    render() {
        return (
            <FirebaseContext.Provider value={this.state.firebase}>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
                <AppWithAuthentication {...this.props} />
            </FirebaseContext.Provider>
        )
    }
}

const AppWithAuthentication = withAuthentication(({ children }) => (
    <div className={styles.container}>
        <div className={styles.content}>
            <Navigation />
            <hr />
            {children}
        </div>
        <Footer />
    </div>
))

export default Layout
