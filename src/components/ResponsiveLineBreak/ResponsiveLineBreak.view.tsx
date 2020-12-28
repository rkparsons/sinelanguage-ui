import { LineBreak } from './ResponsiveLineBreak.style'
import React from 'react'

type ViewProps = {
    isDesktop: boolean
}

export default ({ isDesktop }: ViewProps) => 
    <LineBreak isDesktop={isDesktop} />
