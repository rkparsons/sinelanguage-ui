import React, { ComponentProps } from 'react'

import { ReactNode } from 'react'
import { Typography } from './ResponsiveTypography.style'

type ViewProps = ComponentProps<typeof Typography> & {
    children: ReactNode
    isDesktop: boolean
}

export default ({ children, isDesktop, ...props }: ViewProps) => 
    <Typography isDesktop={isDesktop} {...props}>
        {children}
    </Typography>
