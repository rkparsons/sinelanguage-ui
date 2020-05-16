import React from 'react'

type SnipcartInputProps = {
    name: string
}

export default ({ name }: SnipcartInputProps) => {
    return React.createElement('snipcart-input', { name })
}
