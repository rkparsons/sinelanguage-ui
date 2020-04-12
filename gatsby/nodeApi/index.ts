import { GatsbyNode } from 'gatsby'
import { createPages } from './createPages'
import { onCreateNode } from '../nodeApi/sourceNodes'
import { onCreateWebpackConfig } from './onCreateWebpackConfig'
import { sourceNodes } from '../nodeApi/sourceNodes'

export const nodeAPI: GatsbyNode = {
    createPages,
    onCreateWebpackConfig,
    sourceNodes,
    onCreateNode,
}
