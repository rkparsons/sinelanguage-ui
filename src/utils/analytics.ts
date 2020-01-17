import Cookies from 'universal-cookie'
import ReactGA from 'react-ga'
import ReactPixel from 'react-facebook-pixel'

export const isAnalyticsEnabled = () => new Cookies().get('aa') === 'true'

export const enableAnalytics = () => new Cookies().set('aa', true, { path: '/' })

export const disableAnalytics = () => {
    const cookies = new Cookies()

    cookies.set('aa', false, { path: '/' })
    cookies.remove('_ga', { path: '/' })
    cookies.remove('_gat', { path: '/' })
    cookies.remove('_gid', { path: '/' })
}

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
