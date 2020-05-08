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
    <Button onClick={() => !isDisabled && onClick()} isLight={isLight} isDisabled={isDisabled}>
        <Grid container alignItems="center">
            <Grid item>{icon}</Grid>
            {label && <Grid item>{label}</Grid>}
        </Grid>
    </Button>
)
