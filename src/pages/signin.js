import React, { Fragment } from 'react'

import Layout from '../components/Layout'
import Head from '../components/Head'
import SignInForm, {
    SignInGoogle,
    SignInFacebook,
    SignInTwitter,
} from '../components/SignIn'
import { SignUpLink } from '../components/SignUp'
import { PasswordForgetLink } from '../components/PasswordForget'

const SignInPage = () => (
    <Fragment>
        <Head title="Sign In" />
        <h1>SignIn</h1>
        <SignInForm />
        <SignInGoogle />
        <SignInFacebook />
        <SignInTwitter />
        <PasswordForgetLink />
        <SignUpLink />
    </Fragment>
)

export default () => (
    <Layout>
        <SignInPage />
    </Layout>
)
