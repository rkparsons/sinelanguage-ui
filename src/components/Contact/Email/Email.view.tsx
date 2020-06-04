import { Box, Hidden } from '@material-ui/core'

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
        <Hidden mdUp>
            <Box display="flex">
                <ExternalLink href={`mailto:${email}`} title={title} icon={<MailOutline />} />
            </Box>
        </Hidden>
        <Hidden smDown>
            <Box display="flex">
                <Title variant="h3">{title.toUpperCase()}</Title>
                <ExternalLink href={`mailto:${email}`} title={email.toUpperCase()} />
            </Box>
        </Hidden>
    </>
)
