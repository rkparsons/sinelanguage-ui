import React, { useEffect, useState } from 'react'
import { disableAnalytics, enableAnalytics, initAnalytics } from '~/utils/analytics'

import Cookies from 'universal-cookie'
import View from './Preferences.view'

export default () => {
    const cookies = new Cookies()
    const [isConfigure, setIsConfigure] = useState(false)
    const [isPolicyAccepted, setIsPolicyAccepted] = useState(cookies.get('pa') === 'true')
    const [isPreferencesOpen, setIsPreferencesOpen] = useState(!isPolicyAccepted)
    const [isAnalyticsEnabled, setIsAnalyticsEnabled] = useState(new Cookies().get('aa') === 'true')

    useEffect(() => {
        if (isAnalyticsEnabled) {
            enableAnalytics()
            initAnalytics()
        } else {
            disableAnalytics()
        }
    }, [isAnalyticsEnabled])

    const onPolicyAccepted = () => {
        setIsPolicyAccepted(true)
        setIsPreferencesOpen(false)
        cookies.set('pa', true, { path: '/' })
    }

    return (
        <View
            isPolicyAccepted={isPolicyAccepted}
            onPolicyAccepted={onPolicyAccepted}
            isPreferencesOpen={isPreferencesOpen}
            setIsPreferencesOpen={setIsPreferencesOpen}
            isAnalyticsEnabled={isAnalyticsEnabled}
            setIsAnalyticsEnabled={setIsAnalyticsEnabled}
        />
    )
}
