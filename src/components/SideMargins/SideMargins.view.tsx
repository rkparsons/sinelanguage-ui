import React, { ReactNode } from 'react'

import { SideMargins } from './SideMargins.style'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => <SideMargins>{children}</SideMargins>
