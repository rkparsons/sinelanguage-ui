import React, { ComponentProps } from 'react'

import { Box } from './ResponsiveBox.style'
import { ReactNode } from 'react'

type ViewProps = ComponentProps<typeof Box> & {
    children: ReactNode
    isDesktop: boolean    
}

// todo: pass mobile and desktop versions as render props
export default ({ children, isDesktop, ...props }: ViewProps) => 
    <Box isDesktop={isDesktop} {...props}>
        {children}
    </Box>
