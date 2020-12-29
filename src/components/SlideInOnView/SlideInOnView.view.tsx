import React, { ReactNode } from 'react'

import { Slide } from './SlideInOnView.style'
import { useInView } from 'react-intersection-observer'

type ViewProps = {
    children: ReactNode
    timeout: number
    threshold: number
    count: number
}

export default ({ children, timeout, threshold, count }: ViewProps) => {
    const [containerRef, isInView] = useInView({
        triggerOnce: true,
        threshold,
    })

    return (
        <div ref={containerRef}>
            <Slide isInView={isInView} timeout={timeout} count={count}>{children}</Slide>
        </div>
    )
}
