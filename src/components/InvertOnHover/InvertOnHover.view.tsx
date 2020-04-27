import React, { ReactNode } from 'react'

import { InvertOnHover } from './InvertOnHover.style'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => <InvertOnHover>{children}</InvertOnHover>
