import './src/styles/global.scss'

import React, { Fragment } from 'react'

import { silentAuth } from './src/utils/auth'

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
        return this.state.loading === false && <Fragment>{this.props.children}</Fragment>
    }
}

export const wrapRootElement = ({ element }) => {
    return <SessionCheck>{element}</SessionCheck>
}
