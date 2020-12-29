import Desktop from '~/components/Desktop'
import Mobile from '~/components/Mobile'
import React from 'react'
import { ReactNode } from 'react'
import { Typography } from '@material-ui/core'

type ViewProps = {
    children: ReactNode
    mobile: 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    desktop: 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    gutterBottom?: boolean
}

export default ({ children, mobile, desktop, gutterBottom = false }: ViewProps) => (
    <>
        <Mobile>
            <Typography variant={mobile} gutterBottom={gutterBottom}>
                {children}
            </Typography>
        </Mobile>
        <Desktop>
            <Typography variant={desktop} gutterBottom={gutterBottom}>
                {children}
            </Typography>
        </Desktop>
    </>
)
