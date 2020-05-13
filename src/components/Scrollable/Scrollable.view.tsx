import React, { ReactNode } from 'react'

import ResponsivePaddingTop from '~/components/ResponsivePaddingTop'
import { Scrollable } from './Scrollable.style'

type ViewProps = {
    children: ReactNode
    isWithMargin: boolean
}

export default ({ children, isWithMargin }: ViewProps) => (
    <Scrollable isWithMargin={isWithMargin}>
        <ResponsivePaddingTop>
            {children}
            <br />
            <br />
            <br />
            <br />
        </ResponsivePaddingTop>
    </Scrollable>
)
