import DarkModeToggle from '~/components/DarkModeToggle'
import MailChimp from '~/components/MailChimp'
import Preferences from '~/components/Preferences'
import React from 'react'

// todo: use type or interface consistently
interface Props {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
}

export default ({ isDarkMode, setIsDarkMode }: Props) => {
    return (
        <footer>
            <Preferences />
            <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <MailChimp />
        </footer>
    )
}
