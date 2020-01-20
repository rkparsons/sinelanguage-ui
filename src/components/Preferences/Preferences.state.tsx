import React, { useEffect, useState } from 'react'
import { applyAnalyticsSettings, getCookiePolicy } from '~/utils/cookies'

import View from './Preferences.view'

export default () => {
    const cookiePolicy = getCookiePolicy()
    const [isPreferencesOpen, setIsPreferencesOpen] = useState(!cookiePolicy)
    const [isConfigure, setIsConfigure] = useState(false)
    const [isAnalyticsEnabled, setIsAnalyticsEnabled] = useState(
        !cookiePolicy || (cookiePolicy.analytics as boolean)
    )

    useEffect(() => {
        if (!isPreferencesOpen) {
            applyAnalyticsSettings(isAnalyticsEnabled)
        }
    }, [isPreferencesOpen])

    return (
        <View
            isConfigure={isConfigure}
            setIsConfigure={setIsConfigure}
            isPreferencesOpen={isPreferencesOpen}
            setIsPreferencesOpen={setIsPreferencesOpen}
            isAnalyticsEnabled={isAnalyticsEnabled}
            setIsAnalyticsEnabled={setIsAnalyticsEnabled}
        />
    )
}
