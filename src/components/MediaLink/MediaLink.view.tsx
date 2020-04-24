import { MediaLink, Overlay } from './MediaLink.style'
import React, { ReactNode } from 'react'

import { Link } from 'gatsby'

type ViewProps = {
    url: string
    children: ReactNode
}

export default ({ url, children }: ViewProps) => (
    <Link to={url}>
        <MediaLink>
            {children}
            <Overlay />
        </MediaLink>
    </Link>
)
