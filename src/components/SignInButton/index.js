import React from 'react'
import { login } from '../../utils/auth'

const SignInButton = () => (
    <button type="button" onClick={login}>
        Sign In
    </button>
)

export default SignInButton
