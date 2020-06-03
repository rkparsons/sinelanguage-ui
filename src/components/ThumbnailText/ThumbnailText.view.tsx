import React, { ReactNode } from 'react'

import { Box } from '@material-ui/core'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => (
    <Box paddingTop="0.5rem" minHeight="3.5rem">
        {children}
    </Box>
)
