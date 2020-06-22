import React from 'react'
import { SVG } from './SVGBoxShadow.style'

export default () => (
    <SVG>
        <defs>
            <filter id="shadow">
                <feGaussianBlur stdDeviation="5" />
                <feComposite operator="out" in2="SourceGraphic" />
            </filter>
        </defs>
        <rect rx="8" />
    </SVG>
)
