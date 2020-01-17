import { initAnalytics, isAnalyticsEnabled, trackPageView } from '~/utils/analytics'

import React from 'react'
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

class SessionCheck extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
        }
    }

    handleCheckSession = () => {
        this.setState({ loading: false })
    }

    componentDidMount() {
        silentAuth(this.handleCheckSession)
    }

    render() {
        return this.state.loading === false && <>{this.props.children}</>
    }
}

export const wrapRootElement = ({ element }) => {
    return <SessionCheck>{element}</SessionCheck>
}
