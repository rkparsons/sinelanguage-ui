import React, { useRef } from 'react'

import { SVG } from './SVGBoxShadow.style'
import { v4 as uuidv4 } from 'uuid'

type ViewProps = {
    radius: number
    size: number
    offset: number
    opacity: number
}

export default ({ radius, size, offset, opacity }: ViewProps) => {
    const filterId = useRef(`F${uuidv4()}`)

    return (
        <SVG opacity={opacity}>
            <defs>
                <filter id={filterId.current}>
                    <feGaussianBlur stdDeviation={size} />
                    <feOffset dx={offset} dy={offset} />
                    <feComposite operator="out" in2="SourceGraphic" />
                </filter>
            </defs>
            <rect rx={radius} filter={`url(#${filterId.current})`} />
        </SVG>
    )
}
