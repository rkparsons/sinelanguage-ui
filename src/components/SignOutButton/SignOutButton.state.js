import { Location } from '@reach/router'
import React from 'react'
import SignOutButton from './SignOutButton.view'

export default () => <Location>{({ location }) => <SignOutButton location={location} />}</Location>
