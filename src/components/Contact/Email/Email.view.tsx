import { Grid, Link } from '@material-ui/core'

import React from 'react'
import { Title } from './Email.style'

type ViewProps = {
    title: string
    email: string
}

export default ({ title, email }: ViewProps) => (
    <Grid container>
        <Grid item>
            <Title variant="h3">{title.toUpperCase()}</Title>
        </Grid>
        <Grid item>
            <Link href={`mailto:${email}`} target="_blank" rel="noopener">
                {email.toUpperCase()}
            </Link>
        </Grid>
    </Grid>
)
