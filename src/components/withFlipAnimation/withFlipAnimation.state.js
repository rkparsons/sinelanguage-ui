import { Location } from '@reach/router'
import React from 'react'
import View from './withFlipAnimation.view'

export default WrappedComponent => {
    return props => {
        const WrappedComponentWithProps = () => <WrappedComponent {...props} />

        return (
            <Location>
                {({ location }) => (
                    <View location={location} WrappedComponent={WrappedComponentWithProps} />
                )}
            </Location>
        )
    }
}
