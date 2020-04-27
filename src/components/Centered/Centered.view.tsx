import { Grid, GridSize } from '@material-ui/core'
import React, { ReactNode } from 'react'

import { FullSizeGrid } from './Centered.style'

type ViewProps = {
    children: ReactNode
    size: GridSize
}

export default ({ children, size }: ViewProps) => (
    <FullSizeGrid container justify="center" alignItems="center">
        <Grid item xs={size}>
            {children}
        </Grid>
    </FullSizeGrid>
)
