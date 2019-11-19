import Footer from '../Footer'
import Navigation from '../Navigation'
import React from 'react'
import styles from './index.module.scss'

export default ({ isDarkMode, setIsDarkMode, children }) => (
    <div className={styles.container}>
        <div className={styles.content}>
            <Navigation />
            <hr />
            {children}
        </div>
        <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
)
