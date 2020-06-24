import React, { ReactNode } from 'react'

import { Slide } from '@material-ui/core'
import { useInView } from 'react-intersection-observer'

type ViewProps = {
    children: ReactNode
    timeout: number
    threshold: number
}

export default ({ children, timeout, threshold }: ViewProps) => {
    const [containerRef, inView, entry] = useInView({
        triggerOnce: true,
        threshold,
    })

    return (
        <div ref={containerRef}>
            <Slide in={inView} direction="up" timeout={timeout}>
                <div>{children}</div>
            </Slide>
        </div>
    )
}
