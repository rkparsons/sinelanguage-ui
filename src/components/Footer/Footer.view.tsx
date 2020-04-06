import { Footer, Logo } from './Footer.style'

import DarkModeToggle from '~/components/DarkModeToggle'
import MailChimp from '~/components/MailChimp'
import Preferences from '~/components/Preferences'
import React from 'react'
import logoSrc from '~/images/logo.png'

type ViewProps = {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
}

export default ({ isDarkMode, setIsDarkMode }: ViewProps) => {
    return (
        <Footer>
            {/* <Preferences />
            <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <MailChimp /> */}
            <Logo src={logoSrc} />
            <span>SINE LANGUAGE &nbsp;&nbsp;&nbsp;&copy; 2018</span>
        </Footer>
    )
}
