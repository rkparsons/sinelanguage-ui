import { Box } from '@material-ui/core'
import Desktop from '~/components/Desktop'
import ExternalLink from '~/components/ExternalLink'
import { MailOutline } from '@material-ui/icons'
import Mobile from '~/components/Mobile'
import React from 'react'
import { Title } from './Email.style'

type ViewProps = {
    title: string
    email: string
}

export default ({ title, email }: ViewProps) => (
    <>
        <Mobile>
            <Box display="flex">
                <ExternalLink href={`mailto:${email}`} title={title} icon={<MailOutline />} />
            </Box>
        </Mobile>
        <Desktop>
            <Box display="flex">
                <Title variant="h3">{title.toUpperCase()}</Title>
                <ExternalLink href={`mailto:${email}`} title={email.toUpperCase()} />
            </Box>
        </Desktop>
    </>
)
