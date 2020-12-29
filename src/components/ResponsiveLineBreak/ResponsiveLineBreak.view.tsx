import { LineBreak } from './ResponsiveLineBreak.style'
import React from 'react'

type ViewProps = {
    isDesktop: boolean
}

// todo: remove component
export default ({ isDesktop }: ViewProps) => 
    <LineBreak isDesktop={isDesktop} />
