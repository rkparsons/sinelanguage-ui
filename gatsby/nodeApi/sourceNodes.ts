import { GatsbyNode, SourceNodesArgs } from 'gatsby'

import { typeDefs } from '../../src/cms/nodes'

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({ actions }: SourceNodesArgs) => {
    const { createTypes } = actions

    createTypes(typeDefs)
}
