import React, { ReactNode } from 'react'

import { Button } from './IconButton.style'
import { Grid } from '@material-ui/core'

type ViewProps = {
    label?: ReactNode
    icon: ReactNode
    onClick(): void
    isLight: boolean
    isDisabled?: boolean
}

export default ({ label, icon, onClick, isLight, isDisabled = false }: ViewProps) => (
    <Button
        container
        alignItems="center"
        onClick={onClick}
        isLight={isLight}
        isDisabled={isDisabled}
    >
        <Grid item>{icon}</Grid>
        {label && <Grid item>{label}</Grid>}
    </Button>
)
