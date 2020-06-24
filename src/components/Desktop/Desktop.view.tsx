import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import React from 'react'
import { ReactNode } from 'react'
import { withWidth } from '@material-ui/core'

type ViewProps = {
    children: ReactNode
    width: Breakpoint
}

export default withWidth()(({ children, width }: ViewProps) => {
    const isDesktop = !['xs', 'sm'].includes(width)

    return <>{isDesktop && children}</>
})
