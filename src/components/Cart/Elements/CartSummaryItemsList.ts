import React, { ReactNode } from 'react'

type ViewProps = {
    className: string
}

export default ({ className }: ViewProps) => {
    return React.createElement('cart-summary-items-list', { className })
}
