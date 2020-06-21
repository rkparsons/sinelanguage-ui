import React, { ReactNode } from 'react'

type ViewProps = {
    children: ReactNode
    section: 'top' | 'bottom'
}

export default ({ children, section }: ViewProps) => {
    return React.createElement('billing', { section, is: 'x3d', hidden: true }, children)
}
