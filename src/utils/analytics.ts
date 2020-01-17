import Cookies from 'universal-cookie'
import ReactGA from 'react-ga'
import ReactPixel from 'react-facebook-pixel'

// todo: move everything to side component
// todo: replace strings with env vars

export const grantAnalyticsConsent = () => {
    const cookies = new Cookies()

    cookies.set('aa', true)
}

export const revokeAnalyticsConsent = () => {
    const cookies = new Cookies()

    cookies.remove('aa')
    cookies.remove('_ga')
    cookies.remove('_gat')
    cookies.remove('_gid')
}

export const initAnalytics = () => {
    const cookies = new Cookies()

    if (cookies.get('aa') && !cookies.get('_ga')) {
        ReactGA.initialize('UA-156291521-1')
    }
    // ReactPixel.init('245391766114752', undefined, {
    //     autoConfig: true,
    //     debug: true,
    // })
}

export const trackPageView = (pathname: string) => {
    const cookies = new Cookies()

    if (cookies.get('_ga')) {
        ReactGA.pageview(pathname)
    }
}
