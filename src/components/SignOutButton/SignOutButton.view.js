import { Button } from '@material-ui/core'
import React from 'react'
import { logout } from '../../utils/auth'
import { muiButtonColour } from './SignOutButton.styles'

export default ({ location }) => (
    <Button
        color={muiButtonColour}
        onClick={e => {
            logout(location.origin)
            e.preventDefault()
        }}
    >
        Sign Out
    </Button>
)
