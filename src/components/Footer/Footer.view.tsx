import { Footer } from './Footer.style'
import Logo from '~/components/Logo'
import React from 'react'
import { Typography } from '@material-ui/core'

export default () => {
    return (
        <Footer>
            <Logo />
            <Typography variant="h3">SLR &copy; 2020</Typography>
        </Footer>
    )
}
