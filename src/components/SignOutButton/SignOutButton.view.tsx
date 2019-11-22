import { Button } from '@material-ui/core'
import React from 'react'
import { WindowLocation } from '@reach/router'
import { logout } from '../../utils/auth'
import { muiButtonColour } from './SignOutButton.style'

interface ViewProps {
    location: WindowLocation
}

export default ({ location }: ViewProps) => (
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
