import React, { ReactNode } from 'react'

import { Scrollable } from './Scrollable.style'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => <Scrollable>{children}</Scrollable>
