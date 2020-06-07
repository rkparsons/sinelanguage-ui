import { Hidden, Typography } from '@material-ui/core'

import React from 'react'
import { ReactNode } from 'react'

type ViewProps = {
    children: ReactNode
    mobile: 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    desktop: 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    gutterBottom?: boolean
}

export default ({ children, mobile, desktop, gutterBottom = false }: ViewProps) => (
    <>
        <Hidden mdUp>
            <Typography variant={mobile} gutterBottom={gutterBottom}>
                {children}
            </Typography>
        </Hidden>
        <Hidden smDown>
            <Typography variant={desktop} gutterBottom={gutterBottom}>
                {children}
            </Typography>
        </Hidden>
    </>
)
