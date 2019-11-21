import React from 'react'
import { Location } from '@reach/router'
import SignOutButton from './SignOutButton.view'

export default () => <Location>{({ location }) => <SignOutButton location={location} />}</Location>
