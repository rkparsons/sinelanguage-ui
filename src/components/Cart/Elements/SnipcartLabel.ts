import React, { ReactNode } from 'react'

type ViewProps = {
    className: string
    text: string
    forInput: string
}

export default ({ className, text, forInput }: ViewProps) => {
    return React.createElement('snipcart-label', { className, for: forInput }, text)
}
