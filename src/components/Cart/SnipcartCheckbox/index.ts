import React from 'react'

type SnipcartCheckboxProps = {
    name: string
}

export default ({ name }: SnipcartCheckboxProps) => {
    return React.createElement('snipcart-checkbox', { name })
}
