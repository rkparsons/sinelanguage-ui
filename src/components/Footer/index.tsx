import MailChimp from '../MailChimp'
import React from 'react'
import { SFC } from 'react'
import Switch from '@material-ui/core/Switch'

interface FooterProps {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
}

const Footer: SFC<FooterProps> = ({ isDarkMode, setIsDarkMode }) => {
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
