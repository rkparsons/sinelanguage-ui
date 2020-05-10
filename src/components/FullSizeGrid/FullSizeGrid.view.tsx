import { Grid, GridItemsAlignment, GridJustification, GridSize } from '@material-ui/core'
import React, { ReactNode } from 'react'

import { FullSizeGrid } from './FullSizeGrid.style'

type ViewProps = {
    children: ReactNode
    justify?: GridJustification
    alignItems?: GridItemsAlignment
}

export default ({ children, justify, alignItems }: ViewProps) => (
    <FullSizeGrid container justify={justify} alignItems={alignItems}>
        {children}
    </FullSizeGrid>
)
