import MailChimp from '~/components/MailChimp'
import PrivacyPolicy from '~/components/PrivacyPolicy'
import React from 'react'
import Switch from '@material-ui/core/Switch'
import { muiSwitchColour } from './Footer.style'

interface Props {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
}

export default ({ isDarkMode, setIsDarkMode }: Props) => {
    return (
        <footer>
            <MailChimp />
            <Switch
                color={muiSwitchColour}
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
            />
            <PrivacyPolicy />
        </footer>
    )
}
