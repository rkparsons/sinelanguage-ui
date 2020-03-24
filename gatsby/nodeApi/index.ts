import { GatsbyNode } from 'gatsby'
import { createPages } from './createPages'
import { onCreateWebpackConfig } from './onCreateWebpackConfig'

export const nodeAPI: GatsbyNode = {
    createPages,
    onCreateWebpackConfig,
}
