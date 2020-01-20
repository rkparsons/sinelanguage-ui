import React, { useEffect, useState } from 'react'

import Cookies from 'universal-cookie'
import View from './Preferences.view'
import { applyAnalyticsSettings } from '~/utils/analytics'

export default () => {
    const cookies = new Cookies()

    const [isPolicyAccepted, setIsPolicyAccepted] = useState(cookies.get('consent') === 'true')
    const [isPreferencesOpen, setIsPreferencesOpen] = useState(!isPolicyAccepted)
    const [isConfigure, setIsConfigure] = useState(false)

    // todo: consolidate prefs inside consent cookie value
    const [isAnalyticsEnabled, setIsAnalyticsEnabled] = useState(
        cookies.get('analytics') === 'true' || !cookies.get('analytics')
    )

    useEffect(() => {
        if (isPolicyAccepted) {
            cookies.set('consent', true, { path: '/' })

            setIsPreferencesOpen(false)
            applyAnalyticsSettings(isAnalyticsEnabled)
        }
    }, [isPolicyAccepted])

    return (
        <View
            isPolicyAccepted={isPolicyAccepted}
            setIsPolicyAccepted={setIsPolicyAccepted}
            isConfigure={isConfigure}
            setIsConfigure={setIsConfigure}
            isPreferencesOpen={isPreferencesOpen}
            setIsPreferencesOpen={setIsPreferencesOpen}
            isAnalyticsEnabled={isAnalyticsEnabled}
            setIsAnalyticsEnabled={setIsAnalyticsEnabled}
        />
    )
}
