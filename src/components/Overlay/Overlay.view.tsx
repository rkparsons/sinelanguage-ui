import React, { ReactNode } from 'react'

import { Overlay } from './Overlay.style'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => <Overlay>{children}</Overlay>
