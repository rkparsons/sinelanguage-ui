import { Grid, useMediaQuery, useTheme } from '@material-ui/core'

import Links from '~/components/Navigation/Links'
import { Menu } from './Menu.style'
import Overlay from '~/components/Overlay'
import React from 'react'
import ResponsivePaddingTop from '~/components/ResponsivePaddingTop'

export default () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'))

    if (!isMobile) {
        return <></>
    }

    return (
        <Overlay>
            <ResponsivePaddingTop>
                <Menu>
                    <Grid container spacing={10} justify="space-between">
                        <Links isMobile={true} />
                    </Grid>
                </Menu>
            </ResponsivePaddingTop>
        </Overlay>
    )
}
