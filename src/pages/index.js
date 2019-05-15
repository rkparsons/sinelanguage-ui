import React, { Fragment } from 'react'
import Head from '../components/Head'
import Layout from '../components/layout'

const LandingPage = () => (
    <Fragment>
        <Head title="Landing" />
        <h1>Landing</h1>
        <p>
            The Landing Page is open to everyone, even though the user isn't
            signed in.
        </p>
    </Fragment>
)

export default () => (
    <Layout>
        <LandingPage />
    </Layout>
)
