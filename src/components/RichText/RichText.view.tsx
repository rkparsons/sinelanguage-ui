import { Options, documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { BLOCKS } from '@contentful/rich-text-types'
import { Document } from '@contentful/rich-text-types/dist/types/types'
import React from 'react'
import { Typography } from '@material-ui/core'

interface ViewProps {
    json: Document
    variant: 'h3' | 'body1' | 'body2'
}

export default ({ json, variant }: ViewProps) => {
    const options: Options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <>
                    <Typography variant={variant}>{children}</Typography>
                    <br />
                </>
            ),
        },
    }

    return <>{documentToReactComponents(json, options)}</>
}
