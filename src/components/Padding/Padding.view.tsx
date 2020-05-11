import React, { ReactNode } from 'react'

import { Padding } from './Padding.style'

type ViewProps = {
    children: ReactNode
    left?: boolean
    right?: boolean
}

export default ({ children, left = false, right = false }: ViewProps) => (
    <Padding left={left} right={right}>
        {children}
    </Padding>
)
