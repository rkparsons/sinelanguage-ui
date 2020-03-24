import { initAnalytics, isAnalyticsEnabled, trackPageView } from '~/utils/cookies'

import React from 'react'
import SessionCheck from '~/components/SessionCheck'

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

export const wrapRootElement = ({ element }) => {
    return <SessionCheck>{element}</SessionCheck>
}
