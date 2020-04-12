import { GatsbyNode, SourceNodesArgs } from 'gatsby'

import { typeDefs } from '../../src/cms/nodes'

const axios = require('axios')
const crypto = require('crypto')

const internalType = (type: string) => `soundcloud${type}`

const internalId = (id: string, type: string) => `${internalType(type)}-${id}`

const createHash = (obj: object) =>
    crypto
        .createHash('md5')
        .update(JSON.stringify(obj))
        .digest('hex')

function fetchUserResource(resource: any, userID: number, clientID: string) {
    const url = `https://api.soundcloud.com/users/${userID}${resource}?client_id=${clientID}`
    return axios.get(url)
}

function linkNodes(nodes: any) {
    return nodes.map((node: any) => {
        node.soundcloud_id = node.id
        node.id = internalId(node.id, node.kind)
        return node
    })
}

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({
    actions,
    boundActionCreators,
}: SourceNodesArgs) => {
    const { createTypes } = actions

    createTypes(typeDefs)

    const { createNode } = boundActionCreators

    // todo: replace with env vars
    const userID = 273916891
    const clientID = 'c5a171200f3a0a73a523bba14a1e0a29'

    try {
        // Fetch data
        const tracks = await fetchUserResource('/tracks', userID, clientID)

        const entities = linkNodes([...tracks.data])

        // Process data into nodes.
        entities.forEach((entity: any) =>
            createNode({
                ...entity,
                parent: '__SOURCE__',
                children: [],
                internal: {
                    type: internalType(entity.kind),
                    contentDigest: createHash(entity),
                },
            })
        )

        // We're done, return.
        return
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
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
