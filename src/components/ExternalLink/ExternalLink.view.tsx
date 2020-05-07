import { Box, Grid } from '@material-ui/core'
import React, { ReactNode } from 'react'

import { Link } from './ExternalLink.style'

type ViewProps = {
    href: string
    title?: string
    icon?: ReactNode
}

export default ({ href, title, icon }: ViewProps) => (
    <Link href={href} target="_blank" rel="noopener">
        <Grid container alignItems="center">
            {icon && <Grid item>{icon}</Grid>}
            {title && <Grid item>{title.toUpperCase()}</Grid>}
        </Grid>
    </Link>
)
