import React from 'react'

type ViewProps = {
    name: string
}

export default ({ name }: ViewProps) => {
    return React.createElement('snipcart-checkbox', { name })
}
