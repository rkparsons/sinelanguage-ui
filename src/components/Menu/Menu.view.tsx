import { Grid } from '@material-ui/core'
import Links from '~/components/Navigation/Links'
import { Menu } from './Menu.style'
import Mobile from '~/components/Mobile'
import Overlay from '~/components/Overlay'
import React from 'react'
import ResponsivePaddingTop from '~/components/ResponsivePaddingTop'

export default () => (
    <Overlay>
        <ResponsivePaddingTop>
            <Menu>
                <Mobile>
                    <Grid container spacing={10} justify="space-between">
                        <Links />
                    </Grid>
                </Mobile>
            </Menu>
        </ResponsivePaddingTop>
    </Overlay>
)
