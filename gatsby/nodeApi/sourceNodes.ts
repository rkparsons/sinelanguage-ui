import { GatsbyNode, SourceNodesArgs } from 'gatsby'

import { SoundCloudTrackMetadata } from '~/types'
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

    // todo: replace with env vars & replace any types
    const userID = 273916891
    const clientID = 'c5a171200f3a0a73a523bba14a1e0a29'

    try {
        const response = await fetchUserResource('/tracks', userID, clientID)

        const tracksMetadata: SoundCloudTrackMetadata[] = await Promise.all(
            response.data.map(
                async (
                    trackMetadata: SoundCloudTrackMetadata
                ): Promise<SoundCloudTrackMetadata> => {
                    const samplesUrl = trackMetadata.waveform_url.replace('.png', '.json')
                    const samplesResponse = await axios.get(samplesUrl)
                    const maxValue = Math.max(...samplesResponse.data.samples)
                    const samples = samplesResponse.data.samples.map((x: number) => x / maxValue)

                    return {
                        ...trackMetadata,
                        samples,
                    }
                }
            )
        )

        const entities = linkNodes([...tracksMetadata])

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

        return
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}
