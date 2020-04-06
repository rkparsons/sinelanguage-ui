import { Options, documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { BLOCKS } from '@contentful/rich-text-types'
import { Document } from '@contentful/rich-text-types/dist/types/types'
import React from 'react'
import { Typography } from '@material-ui/core'

interface ViewProps {
    json: Document
}

export default ({ json }: ViewProps) => {
    const options: Options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <Typography variant="body1">{children}</Typography>
            ),
        },
    }

    return <>{documentToReactComponents(json, options)}</>
}
