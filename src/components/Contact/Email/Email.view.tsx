import { Grid, Hidden } from '@material-ui/core'

import ExternalLink from '~/components/ExternalLink'
import { MailOutline } from '@material-ui/icons'
import React from 'react'
import { Title } from './Email.style'

type ViewProps = {
    title: string
    email: string
}

export default ({ title, email }: ViewProps) => (
    <>
        <Grid container>
            <Hidden mdUp>
                <Grid item>
                    <ExternalLink href={`mailto:${email}`} title={title} icon={<MailOutline />} />
                </Grid>
            </Hidden>
            <Hidden smDown>
                <Grid item>
                    <Title variant="h3">{title.toUpperCase()}</Title>
                </Grid>
                <Grid item>
                    <ExternalLink href={`mailto:${email}`} title={email} />
                </Grid>
            </Hidden>
        </Grid>
    </>
)
