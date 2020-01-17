import React, { useEffect } from 'react'
import { disableAnalytics, enableAnalytics, initAnalytics } from '~/utils/analytics'

import MailChimp from '~/components/MailChimp'
import Switch from '@material-ui/core/Switch'
import { muiSwitchColour } from './Footer.style'

interface Props {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
    isAnalyticsEnabled: boolean
    setIsAnalyticsEnabled: (isAnalyticsEnabled: boolean) => void
}

export default ({
    isDarkMode,
    setIsDarkMode,
    isAnalyticsEnabled,
    setIsAnalyticsEnabled,
}: Props) => {
    useEffect(() => {
        if (isAnalyticsEnabled) {
            enableAnalytics()
            initAnalytics()
        } else {
            disableAnalytics()
        }
    }, [isAnalyticsEnabled])

    return (
        <footer>
            <Switch
                color={muiSwitchColour}
                checked={isAnalyticsEnabled}
                onChange={() => setIsAnalyticsEnabled(!isAnalyticsEnabled)}
            />
            <MailChimp />
            <Switch
                color={muiSwitchColour}
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
            />
        </footer>
    )
}
