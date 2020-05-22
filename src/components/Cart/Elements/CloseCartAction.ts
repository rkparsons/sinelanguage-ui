import React, { ReactNode } from 'react'

type ViewProps = {
    children: ReactNode
    className: string
}

export default ({ children, className }: ViewProps) => {
    return React.createElement('close-cart-action', { className }, children)
}
