import Cookies from 'universal-cookie'
import ReactGA from 'react-ga'
import ReactPixel from 'react-facebook-pixel'
import moment from 'moment'

export const isAnalyticsEnabled = () => new Cookies().get('analytics') === 'true'

export const applyAnalyticsSettings = (isAnalyticsEnabled: boolean) => {
    if (isAnalyticsEnabled) {
        enableAnalytics()
        initAnalytics()
    } else {
        disableAnalytics()
    }
}

export const enableAnalytics = () =>
    new Cookies().set('analytics', true, {
        path: '/',
        expires: moment()
            .add(1, 'years')
            .toDate(),
    })

export const disableAnalytics = () => new Cookies().set('analytics', false, { path: '/' })

export const initAnalytics = () => {
    ReactGA.initialize(process.env.GATSBY_GOOGLE_ANALYTICS_ID!)

    ReactPixel.init(process.env.GATSBY_FACEBOOK_PIXEL_ID!, undefined, {
        autoConfig: true,
        debug: false,
    })
}

export const trackPageView = (pathname: string) => {
    ReactGA.pageview(pathname)
    ReactPixel.pageView()
}
