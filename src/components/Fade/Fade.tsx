import React, { ReactNode } from 'react'

import { Fade } from './Fade.style'

type ViewProps = {
    children: ReactNode
    isVisible: boolean
    durationMs: number
}

export default ({ children, isVisible, durationMs }: ViewProps) => (
    <Fade isVisible={isVisible} durationMs={durationMs}>
        {children}
    </Fade>
)
