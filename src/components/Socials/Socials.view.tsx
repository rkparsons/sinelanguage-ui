import { Grid, Typography } from '@material-ui/core'

import IconLink from './IconLink'
import React from 'react'

type ViewProps = {
    urls: string[]
}

export default ({ urls }: ViewProps) => (
    <Grid container spacing={2}>
        {urls.map((url, index) => (
            <Grid item key={index}>
                <Typography variant="h3">
                    <IconLink url={url} />
                </Typography>
            </Grid>
        ))}
    </Grid>
)
