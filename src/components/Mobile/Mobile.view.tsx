import { Hidden } from '@material-ui/core'
import React from 'react'
import { ReactNode } from 'react'

type ViewProps = {
    children: ReactNode  
}

export default ({ children }: ViewProps) => 
    <Hidden implementation="css" mdUp>
        {children}
    </Hidden>
