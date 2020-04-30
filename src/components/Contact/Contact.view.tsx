import { Contact, ContactLineTitle } from './Contact.style'
import { Grid, Link, Typography } from '@material-ui/core'

import Overlay from '~/components/Overlay'
import React from 'react'

type ContactLineProps = {
    title: string
    email: string
}

const ContactLine = ({ title, email }: ContactLineProps) => (
    <Grid container>
        <Grid item>
            <ContactLineTitle variant="h3">{title.toUpperCase()}</ContactLineTitle>
        </Grid>
        <Grid item>
            <Link href={`mailto:${email}`} target="_blank" rel="noopener">
                {email.toUpperCase()}
            </Link>
        </Grid>
    </Grid>
)
export default () => {
    return (
        <Overlay>
            <Contact>
                <Typography variant="h3">CONTACT</Typography>
                <br />
                <ContactLine title="INQUIRIES" email="info@sinelanguage.net" />
                <ContactLine title="BOOKINGS" email="bookings@sinelanguage.net" />
                <ContactLine title="DEMOS" email="demos@sinelanguage.net" />
            </Contact>
        </Overlay>
    )
}
