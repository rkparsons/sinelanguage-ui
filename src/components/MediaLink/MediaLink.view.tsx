import React, { ReactNode } from 'react'

import { MediaLink } from './MediaLink.style'

type ViewProps = {
    url: string
    children: ReactNode
}

export default ({ url, children }: ViewProps) => <MediaLink to={url}>{children}</MediaLink>
