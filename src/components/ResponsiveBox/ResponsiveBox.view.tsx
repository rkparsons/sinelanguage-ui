import React, { ComponentProps } from 'react'

import { Box } from './ResponsiveBox.style'
import { ReactNode } from 'react'

type ViewProps = ComponentProps<typeof Box> & {
    children: ReactNode
    isDesktop: boolean    
}

export default ({ children, isDesktop, ...props }: ViewProps) => 
    <Box isDesktop={isDesktop} {...props}>
        {children}
    </Box>
