import React, { ReactNode } from 'react'

import { ResponsivePaddingTop } from './ResponsivePaddingTop.style'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => <ResponsivePaddingTop>{children}</ResponsivePaddingTop>
