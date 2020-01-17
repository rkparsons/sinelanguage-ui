import Cookies from 'universal-cookie'
import React from 'react'
import ReactGA from 'react-ga'
import ReactPixel from 'react-facebook-pixel'
import { silentAuth } from './src/utils/auth'

const cookies = new Cookies()

export const onClientEntry = () => {
    if (cookies.get('CookieConsent') && !cookies.get('_ga')) {
        ReactGA.initialize('UA-156291521-1')
    }
}

export const onRouteUpdate = (state, page, pages) => {
    if (cookies.get('_ga')) {
        ReactGA.pageview(state.location.pathname)
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
