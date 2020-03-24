import React, { useCallback, useEffect, useState } from 'react'
import { initAnalytics, isAnalyticsEnabled, trackPageView } from '~/utils/cookies'

import { silentAuth } from '~/utils/auth'

export const onClientEntry = () => {
    if (isAnalyticsEnabled()) {
        initAnalytics()
    }
}

export const onRouteUpdate = (state, page, pages) => {
    if (isAnalyticsEnabled()) {
        trackPageView(state.location.pathname)
    }
}

const SessionCheck = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)

    const handleCheckSession = useCallback(() => {
        setIsLoading(false)
    }, [setIsLoading])

    useEffect(() => {
        silentAuth(handleCheckSession)
    }, [handleCheckSession])

    return <>{!isLoading && children}</>
}

export const wrapRootElement = ({ element }) => {
    return <SessionCheck>{element}</SessionCheck>
}
