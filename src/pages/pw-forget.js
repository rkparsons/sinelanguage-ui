import React, { Fragment } from 'react'
import Head from '../components/Head'
import Layout from '../components/Layout'
import PasswordForgetForm from '../components/PasswordForget'

const PasswordForgetPage = () => (
    <Fragment>
        <Head title="Password Reset" />
        <h1>PasswordForget</h1>
        <PasswordForgetForm />
    </Fragment>
)

export default () => (
    <Layout>
        <PasswordForgetPage />
    </Layout>
)
