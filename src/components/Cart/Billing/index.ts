import React, { ReactNode } from 'react'

type BillingProps = {
    children: ReactNode
    section: 'top' | 'bottom'
}

export default ({ children, section }: BillingProps) => {
    return React.createElement('billing', { section, is: 'x3d' }, children)
}
