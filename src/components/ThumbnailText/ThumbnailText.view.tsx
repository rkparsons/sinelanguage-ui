import React, { ReactNode } from 'react'

import { TextContainer } from './ThumbnailText.style'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => (
    <TextContainer paddingTop="0.5rem" minHeight="3.5rem">
        {children}
    </TextContainer>
)
