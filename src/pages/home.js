import React from 'react'
import { compose } from 'recompose'
import Head from '../components/Head'
import Layout from '../components/layout'
import { withAuthorization, withEmailVerification } from '../components/Session'
import Messages from '../components/Messages'

const HomePageBase = () => (
    <div>
        <Head title="Home" />
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        <Messages />
    </div>
)

const condition = authUser => !!authUser

const HomePage = compose(
    withEmailVerification,
    withAuthorization(condition)
)(HomePageBase)

export default () => (
    <Layout>
        <HomePage />
    </Layout>
)
