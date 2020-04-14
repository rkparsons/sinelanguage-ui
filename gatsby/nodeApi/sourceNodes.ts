import { GatsbyNode, SourceNodesArgs } from 'gatsby'
import {
    contentfulManagementToken,
    contentfulSpaceId,
    soundCloudClientID,
} from '../../env-variables'

import { SoundCloudTrackMetadata } from '~/types'
import { createClient } from 'contentful-management'
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

function fetchSoundCloudTracks(trackIDs: number[]) {
    const url = `https://api.soundcloud.com/tracks?client_id=${soundCloudClientID}&ids=${trackIDs.join(
        ','
    )}`
    return axios.get(url)
}

function linkNodes(nodes: any) {
    return nodes.map((node: any) => {
        node.soundcloud_id = node.id
        node.id = internalId(node.id, node.kind)
        return node
    })
}

function getSoundCloudTrackIDs() {
    return createClient({
        accessToken: contentfulManagementToken,
    })
        .getSpace(contentfulSpaceId)
        .then(space => space.getEnvironment('master'))
        .then(environment => environment.getEntries({ content_type: 'track' }))
        .then(entries => entries.items.map(entry => entry.fields.soundCloudID['en-US'] as number))
}

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({
    actions,
    boundActionCreators,
}: SourceNodesArgs) => {
    const { createTypes } = actions

    createTypes(typeDefs)

    const { createNode } = boundActionCreators

    try {
        const trackIds = await getSoundCloudTrackIDs()
        const response = await fetchSoundCloudTracks(trackIds)

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
