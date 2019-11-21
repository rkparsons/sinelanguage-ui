import MailChimp from '../MailChimp'
import React from 'react'
import Switch from '@material-ui/core/Switch'
import { muiSwitchColour } from './Footer.style'

interface FooterProps {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
}

export default ({ isDarkMode, setIsDarkMode }: FooterProps) => {
    return (
        <footer>
            <MailChimp />
            <Switch
                color={muiSwitchColour}
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
            />
        </footer>
    )
}
