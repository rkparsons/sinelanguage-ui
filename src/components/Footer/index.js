import MailChimp from '../MailChimp'
import React from 'react'
import Switch from '@material-ui/core/Switch'

const Footer = ({ isDarkMode, setIsDarkMode }) => {
    return (
        <footer>
            <MailChimp />
            <Switch
                color="secondary"
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
            />
        </footer>
    )
}

export default Footer
