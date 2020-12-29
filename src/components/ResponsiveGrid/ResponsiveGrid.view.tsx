import React, { ComponentProps } from 'react'

import { Grid } from './ResponsiveGrid.style'
import { ReactNode } from 'react'

type ViewProps = ComponentProps<typeof Grid> & {
    children: ReactNode
    isDesktop: boolean
}

export default ({ children, isDesktop, ...props }: ViewProps) => 
    <Grid isDesktop={isDesktop} {...props}>
        {children}
    </Grid>
