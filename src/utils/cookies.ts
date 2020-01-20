import Cookies from 'universal-cookie'
import ReactGA from 'react-ga'
import ReactPixel from 'react-facebook-pixel'
import moment from 'moment'

const cookies = new Cookies()

export const getCookiePolicy = () => cookies.get('consent')

export const isAnalyticsEnabled = () => getCookiePolicy() && getCookiePolicy().analytics === 'true'

export const applyAnalyticsSettings = (isAnalyticsEnabled: boolean) => {
    setAnalytics(isAnalyticsEnabled)

    if (isAnalyticsEnabled) {
        initAnalytics()
    }
}

export const setAnalytics = (isEnabled: boolean) => {
    const consent = cookies.get('consent') || {}
    consent.analytics = isEnabled

    cookies.set('consent', consent, {
        path: '/',
        expires: moment()
            .add(1, 'years')
            .toDate(),
    })
}

export const initAnalytics = () => {
    ReactGA.initialize(process.env.GATSBY_GOOGLE_ANALYTICS_ID!)
}

export const trackPageView = (pathname: string) => {
    ReactGA.pageview(pathname)
    ReactPixel.pageView()
}
