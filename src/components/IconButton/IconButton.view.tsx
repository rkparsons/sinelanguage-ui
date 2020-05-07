import React, { ReactNode } from 'react'

import { Button } from './IconButton.style'
import { Grid } from '@material-ui/core'

type ViewProps = {
    label: ReactNode
    icon: ReactNode
    onClick(): void
    isLight: boolean
}

export default ({ label, icon, onClick, isLight }: ViewProps) => (
    <Button container alignItems="center" onClick={onClick} isLight={isLight}>
        <Grid item>{icon}</Grid>
        <Grid item>{label}</Grid>
    </Button>
)
