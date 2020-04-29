import React, { ReactNode } from 'react'

import { ResponsiveColumn } from './Column.style'

type ViewProps = {
    widthMultiplier: number
    children: ReactNode
}

export default ({ widthMultiplier, children }: ViewProps) => {
    return <ResponsiveColumn widthMultiplier={widthMultiplier}>{children}</ResponsiveColumn>
}
