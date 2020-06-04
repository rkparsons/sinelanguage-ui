import { Box, Grid, Typography } from '@material-ui/core'
import React, { ReactNode } from 'react'

import { Link } from './ExternalLink.style'

type ViewProps = {
    href: string
    title?: string
    icon?: ReactNode
    variant?: 'h3' | 'h5' | 'body1'
}

export default ({ href, title, icon, variant = 'h3' }: ViewProps) => {
    if (icon) {
        return (
            <Link href={href} target="_blank" rel="noopener">
                <Box display="flex" alignItems="center">
                    <Box paddingRight="1rem" component="span" display="flex" alignItems="center">
                        {icon}
                    </Box>
                    <Typography variant={variant}>{title}</Typography>
                </Box>
            </Link>
        )
    }

    return (
        <>
            <Link href={href} target="_blank" rel="noopener">
                <Typography variant={variant}>{title}</Typography>
            </Link>
        </>
    )
}
