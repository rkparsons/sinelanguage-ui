import React, { ReactNode } from 'react'

import { Container } from './PointerEvents.style'

type ViewProps = {
    children: ReactNode
    value:
        | 'auto'
        | 'none'
        | 'visiblePainted'
        | 'visibleFill'
        | 'visibleStroke'
        | 'visible'
        | 'painted'
        | 'fill'
        | 'stroke'
        | 'all'
        | 'inherit'
}

export default ({ children, value }: ViewProps) => (
    <Container pointerEvents={value}>{children}</Container>
)
