import React, { ReactNode } from 'react'

import { OverflowContainer } from './OverflowEllipsis.style'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => <OverflowContainer>{children}</OverflowContainer>
