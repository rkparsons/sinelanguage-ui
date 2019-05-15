import React, { Fragment } from 'react'
import Head from '../components/Head'
import Layout from '../components/layout'
import SignUpForm from '../components/SignUp'

const SignUpPage = () => (
    <Fragment>
        <Head title="Sign Up" />
        <h1>SignUp</h1>
        <SignUpForm />
    </Fragment>
)

export default () => (
    <Layout>
        <SignUpPage />
    </Layout>
)
