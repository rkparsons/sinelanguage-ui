import DarkModeToggle from '~/components/DarkModeToggle'
import { Logo } from './Footer.style'
import MailChimp from '~/components/MailChimp'
import Preferences from '~/components/Preferences'
import React from 'react'
import logoSrc from '~/images/logo.png'

// todo: use type or interface consistently
interface Props {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
}

export default ({ isDarkMode, setIsDarkMode }: Props) => {
    return (
        <footer>
            {/* <Preferences />
            <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <MailChimp /> */}
            <Logo src={logoSrc} />
            <span>SINE LANGUAGE &nbsp;&nbsp;&nbsp;&copy; 2018</span>
        </footer>
    )
}
