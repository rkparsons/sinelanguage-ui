import { Flipper } from 'react-flip-toolkit'
import React from 'react'

export default ({ location, WrappedComponent }) => (
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
        <WrappedComponent />
    </Flipper>
)
