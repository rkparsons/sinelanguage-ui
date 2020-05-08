import React, { ReactNode } from 'react'

import { Container } from './Whitespace.style'

type ViewProps = {
    children: ReactNode
    value: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap' | 'initial' | 'inherit'
}

export default ({ children, value }: ViewProps) => (
    <Container whiteSpace={value}>{children}</Container>
)
