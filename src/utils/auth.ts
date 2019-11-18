// upgrade to latest spa sdk
import auth0 from 'auth0-js'
import { navigate } from 'gatsby'

const isBrowser = typeof window !== 'undefined'

const auth: auth0.WebAuth | null = isBrowser
    ? new auth0.WebAuth({
          domain: process.env.GATSBY_AUTH0_DOMAIN!,
          clientID: process.env.GATSBY_AUTH0_CLIENTID!,
          redirectUri: process.env.GATSBY_AUTH0_CALLBACK,
          responseType: 'token id_token',
          scope: 'openid profile email',
      })
    : null

let accessToken: string, idToken: string, expiresAt: number

let user = {}

export const isAuthenticated = () => {
    if (!isBrowser) {
        return
    }

    return localStorage.getItem('isLoggedIn') === 'true'
}

export const login = () => {
    if (!isBrowser) {
        return
    }

    auth && auth.authorize()
}

// todo: remove any type
const setSession = (cb = () => {}) => (err: any, authResult: any) => {
    if (err) {
        navigate('/')
        cb()
        return
    }

    if (authResult && authResult.accessToken && authResult.idToken) {
        let expiresAt = authResult.expiresIn! * 1000 + new Date().getTime()
        accessToken = authResult.accessToken
        idToken = authResult.idToken
        expiresAt = expiresAt
        user = authResult.idTokenPayload
        localStorage.setItem('isLoggedIn', 'true')
        navigate('/account')
        cb()
    }
}

export const silentAuth = (callback: () => void) => {
    if (!isAuthenticated()) return callback()
    auth && auth.checkSession({}, setSession(callback))
}

export const handleAuthentication = () => {
    if (!isBrowser) {
        return
    }

    auth && auth.parseHash(setSession())
}

export const getProfile = () => {
    return user
}

export const logout = (returnUrl: string) => {
    console.log(returnUrl)
    localStorage.setItem('isLoggedIn', 'false')
    auth && auth.logout({ returnTo: returnUrl })
}
