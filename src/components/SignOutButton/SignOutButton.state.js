import { Location } from '@reach/router'
import React from 'react'
import { View } from './SignOutButton.view'

const SignOutButton = () => <Location>{({ location }) => <View location={location} />}</Location>

export { SignOutButton }
