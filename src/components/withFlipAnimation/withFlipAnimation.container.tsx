import React, { ComponentType } from 'react'

import { Flipper } from 'react-flip-toolkit'
import { Location } from '@reach/router'

export default <T extends any>(Component: ComponentType<T>) => {
    return (props: T) => (
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
                    <Component {...props} />
                </Flipper>
            )}
        </Location>
    )
}
