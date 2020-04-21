import { Grid, Typography } from '@material-ui/core'
import React, { Component, ReactNode } from 'react'

import { Button } from './IconButton.style'

type ViewProps = {
    label: string
    icon: ReactNode
    onClick(): void
}

export default ({ label, icon, onClick }: ViewProps) => (
    <Button onClick={onClick}>
        <Grid container>
            <Grid item>{icon}</Grid>
            <Grid item>
                <Typography variant="body1">{label}</Typography>
            </Grid>
        </Grid>
    </Button>
)
