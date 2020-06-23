import { Blur, Content, ElevatedBlurContainer } from './GlassPanel.style'
import React, { ReactNode } from 'react'

type ElevatedBlurProps = {
    children: ReactNode
    elevation: number
    borderRadius: number
    height?: number
}

export default ({ children, elevation, borderRadius, height }: ElevatedBlurProps) => (
    <ElevatedBlurContainer borderRadius={borderRadius}>
        <Content elevation={elevation} height={height}>
            {children}
        </Content>
        <Blur />
    </ElevatedBlurContainer>
)
