import React, { ReactNode } from 'react'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => {
    return React.createElement('cart-summary', { hidden: true }, children)
}
