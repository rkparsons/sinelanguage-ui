import ExternalLink from '~/components/ExternalLink'
import { MailOutline } from '@material-ui/icons'
import React from 'react'
import ResponsiveBox from '~/components/ResponsiveBox'
import { Title } from './Email.style'

type ViewProps = {
    title: string
    email: string
}

export default ({ title, email }: ViewProps) => (
    <>
        <ResponsiveBox isDesktop={false} display="flex">
            <ExternalLink href={`mailto:${email}`} title={title} icon={<MailOutline />} />
        </ResponsiveBox>
        <ResponsiveBox isDesktop={true} display="flex">
            <Title variant="h3">{title.toUpperCase()}</Title>
            <ExternalLink href={`mailto:${email}`} title={email.toUpperCase()} />
        </ResponsiveBox>
    </>
)
