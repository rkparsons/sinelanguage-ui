import { Grid, Typography } from '@material-ui/core'
import React, { ReactNode } from 'react'

import { Link } from './ExternalLink.style'

type ViewProps = {
    href: string
    title?: string
    icon?: ReactNode
    variant?: 'h3' | 'h5' | 'body1'
}

export default ({ href, title, icon, variant = 'h3' }: ViewProps) => (
    <Link href={href} target="_blank" rel="noopener">
        <Grid container alignItems="center" spacing={2}>
            {icon && <Grid item>{icon}</Grid>}
            {title && (
                <Grid item>
                    <Typography variant={variant}>{title}</Typography>
                </Grid>
            )}
        </Grid>
    </Link>
)
