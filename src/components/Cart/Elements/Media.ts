import React, { ReactNode } from 'react'

type ViewProps = {
    children: ReactNode
    name: string
    className?: string
}

export default ({ children, name, className }: ViewProps) => {
    return React.createElement('media', { name, className }, children)
}
