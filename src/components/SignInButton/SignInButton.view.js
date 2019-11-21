import { Button } from '@material-ui/core'
import React from 'react'
import { login } from '../../utils/auth'
import { muiButtonColour } from './SignInButton.styles'

const SignInButton = () => (
    <Button color={muiButtonColour} onClick={login}>
        Sign In
    </Button>
)

export { SignInButton }
