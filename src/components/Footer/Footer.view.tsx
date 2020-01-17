import React, { useEffect, useState } from 'react'
import { disableAnalytics, enableAnalytics, initAnalytics } from '~/utils/analytics'

import Cookies from 'universal-cookie'
import MailChimp from '~/components/MailChimp'
import Switch from '@material-ui/core/Switch'
import { muiSwitchColour } from './Footer.style'

interface Props {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
}

export default ({ isDarkMode, setIsDarkMode }: Props) => {
    const cookies = new Cookies()
    const [isAnalyticsOn, setIsAnalyticsOn] = useState(cookies.get('aa') === 'true')

    useEffect(() => {
        if (isAnalyticsOn) {
            enableAnalytics()
            initAnalytics()
        } else {
            disableAnalytics()
        }
    }, [isAnalyticsOn])

    return (
        <footer>
            <Switch
                color={muiSwitchColour}
                checked={isAnalyticsOn as boolean}
                onChange={() => setIsAnalyticsOn(!isAnalyticsOn)}
            />
            <MailChimp />
            {/* <Switch
                color={muiSwitchColour}
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
            /> */}
        </footer>
    )
}
