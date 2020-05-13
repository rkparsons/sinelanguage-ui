import { Grid, withWidth } from '@material-ui/core'

import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import Links from '~/components/Navigation/Links'
import { Menu } from './Menu.style'
import Overlay from '~/components/Overlay'
import React from 'react'
import ResponsivePaddingTop from '~/components/ResponsivePaddingTop'

type ViewProps = {
    width: Breakpoint
}

export default withWidth()(({ width }: ViewProps) => {
    const isMobile = ['xs', 'sm'].includes(width)

    if (!isMobile) {
        return <></>
    }

    return (
        <Overlay>
            <ResponsivePaddingTop>
                <Menu>
                    <Grid container spacing={isMobile ? 10 : 0} justify="space-between">
                        <Links isMobile={isMobile} />
                    </Grid>
                </Menu>
            </ResponsivePaddingTop>
        </Overlay>
    )
})
