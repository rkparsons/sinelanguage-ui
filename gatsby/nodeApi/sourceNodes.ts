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

// todo: get rid of any types
const processEntity = (entity: any) => ({
    ...entity,
    parent: '__SOURCE__',
    children: [],
    internal: {
        type: internalType(entity.kind),
        contentDigest: createHash(entity),
    },
})

const collectTracksFromPlaylist = (accTracks: any, playlist: any) => [
    ...accTracks,
    ...playlist.tracks,
]

const addIfUnique = (uniqueItems: any, item: any) =>
    uniqueItems.find((uniqueItem: any) => uniqueItem.id === item.id)
        ? uniqueItems
        : [...uniqueItems, item]

const addReverseLink = (node: any, linkedNode: any) => {
    if (linkedNode[`${node.kind}s___NODE`] === undefined) {
        linkedNode[`${node.kind}s___NODE`] = []
    }
    linkedNode[`${node.kind}s___NODE`].push(node.id)
}

function fetchUserResource(resource: any, userID: number, clientID: string) {
    const url = `https://api.soundcloud.com/users/${userID}${resource}?client_id=${clientID}`
    return axios.get(url)
}

function linkNodes(nodes: any) {
    return nodes
        .map((node: any) => {
            node.soundcloud_id = node.id
            node.id = internalId(node.id, node.kind)
            return node
        })
        .map((node: any) => {
            let user: any = undefined

            if (node.user) {
                user = nodes.find(
                    (user: any) => user.id === internalId(node.user.id, node.user.kind)
                )

                if (user) {
                    // Add link to user node
                    node.user___NODE = internalId(node.user.id, node.user.kind)
                    delete node.user

                    // Add reverse link to node on user
                    addReverseLink(node, user)
                }
            }

            if (node.tracks) {
                // Add links to tracks on node
                node.tracks___NODE = node.tracks.map((track: any) =>
                    internalId(track.id, track.kind)
                )

                // Add reverse links to node on tracks and users
                node.tracks.map((track: any) => {
                    const matchingTrack = nodes.find(
                        (user: any) => user.id === internalId(track.id, track.kind)
                    )

                    if (matchingTrack) {
                        addReverseLink(node, matchingTrack)
                    }
                    if (user) {
                        addReverseLink(node, user)
                    }
                })

                delete node.tracks
            }

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
        const userInfo = await fetchUserResource('', userID, clientID)
        const playlists = await fetchUserResource('/playlists', userID, clientID)
        const tracks = await fetchUserResource('/tracks', userID, clientID)

        const tracksFromPlaylists = playlists.data.reduce(collectTracksFromPlaylist, [])
        const combinedTracks = tracksFromPlaylists.reduce(addIfUnique, tracks.data)

        const users = [userInfo.data]
        const combinedUsers = combinedTracks.reduce(addIfUnique, users)

        const entities = linkNodes([...users, ...playlists.data, ...combinedTracks])

        // Process data into nodes.
        entities.forEach((entity: any) => createNode(processEntity(entity)))

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
