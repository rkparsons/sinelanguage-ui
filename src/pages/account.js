import React, { Fragment } from 'react'
import { compose } from 'recompose'
import Head from '../components/Head'
import Layout from '../components/Layout'
import {
    AuthUserContext,
    withAuthorization,
    withEmailVerification,
} from '../components/Session'
import { FirebaseContext } from '../components/Firebase'
import PasswordForgetForm from '../components/PasswordForget'
import PasswordChangeForm from '../components/PasswordChange'
import LoginManagement from '../components/LoginManagement'
import Messages from '../components/Messages'

const AccountPageBase = () => (
    <Fragment>
        <Head title="Account" />
        <FirebaseContext.Consumer>
            {firebase => (
                <AuthUserContext.Consumer>
                    {authUser => (
                        <div>
                            <h1>Account: {authUser.email}</h1>
                            <PasswordForgetForm />
                            <PasswordChangeForm />
                            <LoginManagement authUser={authUser} />
                            <button
                                onClick={() => {
                                    firebase.auth.currentUser
                                        .getIdToken(true)
                                        .then(function(idToken) {
                                            return fetch(
                                                '/.netlify/functions/hello',
                                                {
                                                    headers: {
                                                        Authorization: `Bearer ${idToken}`,
                                                    },
                                                }
                                            )
                                        })
                                        .then(response => console.log(response))
                                        .catch(error => console.error(error))
                                }}
                            >
                                Call Lambda
                            </button>
                        </div>
                    )}
                </AuthUserContext.Consumer>
            )}
        </FirebaseContext.Consumer>
    </Fragment>
)

const condition = authUser => !!authUser

const AccountPage = compose(
    withEmailVerification,
    withAuthorization(condition)
)(AccountPageBase)

export default () => (
    <Layout>
        <AccountPage />
        <hr />
        <Messages />
    </Layout>
)
