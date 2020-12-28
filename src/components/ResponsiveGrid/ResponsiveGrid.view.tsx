import { Grid } from './ResponsiveGrid.style'
import { GridSize } from '@material-ui/core'
import React from 'react'
import { ReactNode } from 'react'

type ViewProps = {
    children: ReactNode
    container?: boolean
    item?: boolean
    xs?: GridSize
    sm?: GridSize
    md?: GridSize
    lg?: GridSize
    xl?: GridSize
    isDesktop: boolean
}

export default ({ children, container, item, xs, sm, md, lg, xl, isDesktop }: ViewProps) => 
    <Grid container={container} 
        item={item} 
        xs={xs} 
        sm={sm} 
        md={md} 
        lg={lg} 
        xl={xl} 
        isDesktop={isDesktop}>
            {children}
    </Grid>
