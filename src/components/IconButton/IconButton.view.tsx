import React, { ReactNode } from 'react'

import { Button } from './IconButton.style'
import { Grid } from '@material-ui/core'

type ViewProps = {
    label: ReactNode
    icon: ReactNode
    onClick(): void
}

export default ({ label, icon, onClick }: ViewProps) => (
    <Button container justify="center" alignItems="center" onClick={onClick}>
        <Grid item>{icon}</Grid>
        <Grid item>{label}</Grid>
    </Button>
)
