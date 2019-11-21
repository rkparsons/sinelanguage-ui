import { Location } from '@reach/router'
import React from 'react'
import View from './SignOutButton.view'

export default () => <Location>{({ location }) => <View location={location} />}</Location>
