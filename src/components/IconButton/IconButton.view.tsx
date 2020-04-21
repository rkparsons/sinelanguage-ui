import { Button, IconContainer } from './IconButton.style'
import { Grid, Typography } from '@material-ui/core'
import React, { ReactNode } from 'react'

type ViewProps = {
    label: string
    icon: ReactNode
    onClick(): void
}

export default ({ label, icon, onClick }: ViewProps) => (
    <Button onClick={onClick}>
        <Grid container justify="center" alignItems="center" spacing={1}>
            <Grid item>
                <IconContainer>{icon}</IconContainer>
            </Grid>
            <Grid item>
                <Typography variant="body1">{label}</Typography>
            </Grid>
        </Grid>
    </Button>
)
