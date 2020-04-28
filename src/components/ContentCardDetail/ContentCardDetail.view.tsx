import React, { ReactNode } from 'react'

import { CardDetail } from './ContentCardDetail.style'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => <CardDetail>{children}</CardDetail>
