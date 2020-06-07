import { Hidden } from '@material-ui/core'
import Menu from '~/components/Menu'
import React from 'react'

export default () => (
    <Hidden mdUp>
        <Menu />
    </Hidden>
)
