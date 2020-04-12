import { GatsbyNode, SourceNodesArgs } from 'gatsby'

import { typeDefs } from '../../src/cms/nodes'

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({ actions }: SourceNodesArgs) => {
    const { createTypes } = actions

    createTypes(typeDefs)
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
    const { createNode, createNodeField } = actions

    // if (node.id.includes('podcasts')) {
    //     createNodeField({
    //         node,
    //         name: `samples`,
    //         value: [1, 2, 3, 4],
    //     })
    // }
}
