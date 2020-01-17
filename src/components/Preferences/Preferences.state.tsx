import React, { useEffect, useState } from 'react'
import { disableAnalytics, enableAnalytics, initAnalytics } from '~/utils/analytics'

import Cookies from 'universal-cookie'
import View from './Preferences.view'

export default () => {
    const cookies = new Cookies()
    const [isPolicyAccepted, setIsPolicyAccepted] = useState(cookies.get('pa') === 'true')
    const [isAnalyticsEnabled, setIsAnalyticsEnabled] = useState(new Cookies().get('aa') === 'true')

    useEffect(() => {
        if (isAnalyticsEnabled) {
            enableAnalytics()
            initAnalytics()
        } else {
            disableAnalytics()
        }
    }, [isAnalyticsEnabled])

    const onPolicyAccepted = (value: boolean) => {
        setIsPolicyAccepted(value)
        cookies.set('pa', true, { path: '/' })
    }

    return (
        <View
            isPolicyAccepted={isPolicyAccepted}
            onPolicyAccepted={onPolicyAccepted}
            isAnalyticsEnabled={isAnalyticsEnabled}
            setIsAnalyticsEnabled={setIsAnalyticsEnabled}
        />
    )
}
