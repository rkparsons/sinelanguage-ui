import MailChimp from '~/components/MailChimp'
import Preferences from '~/components/Preferences'
import React from 'react'
import { Switch } from '@material-ui/core'
import { muiSwitchColour } from './Footer.style'

// todo: use type or interface consistently
interface Props {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
}

export default ({ isDarkMode, setIsDarkMode }: Props) => {
    return (
        <footer>
            <Preferences />
            <MailChimp />
            <Switch
                color={muiSwitchColour}
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
            />
        </footer>
    )
}
