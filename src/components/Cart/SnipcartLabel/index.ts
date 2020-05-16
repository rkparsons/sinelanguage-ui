import React, { ReactNode } from 'react'

type SnipcartLabelProps = {
    className: string
    text: string
    forInput: string
}

export default ({ className, text, forInput }: SnipcartLabelProps) => {
    return React.createElement('snipcart-label', { className, for: forInput }, text)
}
