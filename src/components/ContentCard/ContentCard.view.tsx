import React, { ReactNode } from 'react'

import { Card } from './ContentCard.style'

type ViewProps = {
    widthMultiplier: number
    children: ReactNode
}

export default ({ widthMultiplier, children }: ViewProps) => {
    return <Card widthMultiplier={widthMultiplier}>{children}</Card>
}
