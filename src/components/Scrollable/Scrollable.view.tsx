import React, { ReactNode } from 'react'

import { Scrollable } from './Scrollable.style'

type ViewProps = {
    children: ReactNode
    isWithMargin: boolean
}

export default ({ children, isWithMargin }: ViewProps) => (
    <Scrollable isWithMargin={isWithMargin}>
        {children}
        <br />
        <br />
        <br />
        <br />
    </Scrollable>
)
