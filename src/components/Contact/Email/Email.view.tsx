import ExternalLink from '~/components/ExternalLink'
import { Grid } from '@material-ui/core'
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
            <ExternalLink href={`mailto:${email}`} title={email} />
        </Grid>
    </Grid>
)
