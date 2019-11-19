import React from 'react'
import { Location } from '@reach/router'
import Button from '@material-ui/core/Button'
import { logout } from '../../utils/auth'

const SignOutButton = () => (
    <Location>
        {({ location }) => (
            <Button
                color="secondary"
                onClick={e => {
                    logout(location.origin)
                    e.preventDefault()
                }}
            >
                Sign Out
            </Button>
        )}
    </Location>
)

export default SignOutButton
