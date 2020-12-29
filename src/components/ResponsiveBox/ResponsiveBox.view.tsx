import { Box } from './ResponsiveBox.style'
import React from 'react'
import { ReactNode } from 'react'

type ViewProps = {
    children: ReactNode
    isDesktop: boolean
}

export default ({ children, isDesktop }: ViewProps) => 
    <Box isDesktop={isDesktop}>
        {children}
    </Box>
