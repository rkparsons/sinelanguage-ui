import { GatsbyNode } from 'gatsby'
import { createPages } from './createPages'
import { onCreateWebpackConfig } from './onCreateWebpackConfig'
import { sourceNodes } from '../nodeApi/sourceNodes'

export const nodeAPI: GatsbyNode = {
    createPages,
    onCreateWebpackConfig,
    sourceNodes,
}
