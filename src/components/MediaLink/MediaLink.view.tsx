import { MediaLink, Overlay } from './MediaLink.style'
import React, { ReactNode } from 'react'

import { Link as GatsbyLink } from 'gatsby'
import { Link as MuiLink } from '@material-ui/core'

type ViewProps = {
    url: string
    children: ReactNode
    isExternal?: boolean
}

export default ({ url, children, isExternal = false }: ViewProps) =>
    isExternal ? (
        <MuiLink href={url} target="_blank" rel="noopener">
            <MediaLink>
                {children}
                <Overlay />
            </MediaLink>
        </MuiLink>
    ) : (
        <GatsbyLink to={url}>
            <MediaLink>
                {children}
                <Overlay />
            </MediaLink>
        </GatsbyLink>
    )
