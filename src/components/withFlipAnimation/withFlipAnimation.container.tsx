import React, { ComponentProps, ComponentType } from 'react'

import { Flipper } from 'react-flip-toolkit'
import { Location } from '@reach/router'

export default (WrappedComponent: ComponentType) => {
    return (props: ComponentProps<typeof WrappedComponent>) => {
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
