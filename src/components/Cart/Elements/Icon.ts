import React from 'react'

type ViewProps = {
    name: string
    alt: string
    className: string
}

export default ({ name, alt, className }: ViewProps) => {
    return React.createElement('icon', { name, alt, className })
}
