import { Contact } from './Contact.style'
import Email from './Email'
import Follow from './Follow'
import Overlay from '~/components/Overlay'
import React from 'react'
import ResponsivePaddingTop from '~/components/ResponsivePaddingTop'
import Scrollable from '~/components/Scrollable'
import Subscribe from './Subscribe'
import { Typography } from '@material-ui/core'

export default () => {
    return (
        <Overlay>
            <Scrollable isWithMargin={false}>
                <Contact>
                    <Typography variant="h3">CONTACT</Typography>
                    <br />
                    <Email title="INQUIRIES" email="info@sinelanguage.net" />
                    <Email title="BOOKINGS" email="bookings@sinelanguage.net" />
                    <Email title="DEMOS" email="demos@sinelanguage.net" />
                    <br />
                    <br />
                    <Subscribe />
                    <br />
                    <br />
                    <Follow />
                </Contact>
            </Scrollable>
        </Overlay>
    )
}
