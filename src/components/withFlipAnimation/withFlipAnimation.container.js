import { Flipper } from 'react-flip-toolkit'
import { Location } from '@reach/router'
import React from 'react'

export default WrappedComponent => {
    return props => {
        return (
            <Location>
                {({ location }) => (
                    <Flipper
                        flipKey={location.pathname}
                        spring="veryGentle"
                        decisionData
                        staggerConfig={{
                            default: {
                                speed: 0.5,
                            },
                            namedStagger: { speed: 0.2 },
                        }}
                    >
                        <WrappedComponent {...props} />
                    </Flipper>
                )}
            </Location>
        )
    }
}
