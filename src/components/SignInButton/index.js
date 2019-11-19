import React from 'react'
import Button from '@material-ui/core/Button'
import { login } from '../../utils/auth'

const SignInButton = () => <Button onClick={login}>Sign In</Button>

export default SignInButton
