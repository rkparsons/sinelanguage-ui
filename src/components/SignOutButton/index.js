import React from 'react'
import { Location } from '@reach/router'
import { logout } from '../../utils/auth'

const SignOutButton = () => (
    <Location>
        {({ location }) => (
            <button
                type="button"
                onClick={e => {
                    logout(location.origin)
                    e.preventDefault()
                }}
            >
                Sign Out
            </button>
        )}
    </Location>
)

export default SignOutButton
