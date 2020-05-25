import { Grid, GridItemsAlignment, GridJustification, GridSize } from '@material-ui/core'
import React, { ReactNode } from 'react'

import { FullSizeGrid } from './FullSizeGrid.style'

type ViewProps = {
    children: ReactNode
    direction?: 'row' | 'column'
    justify?: GridJustification
    alignItems?: GridItemsAlignment
}

export default ({ children, justify, alignItems, direction = 'row' }: ViewProps) => (
    <FullSizeGrid container direction={direction} justify={justify} alignItems={alignItems}>
        {children}
    </FullSizeGrid>
)
