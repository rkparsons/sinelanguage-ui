import { GatsbyNode } from 'gatsby'
import path from 'path'

type QueryResult = {
    allContentfulArtist: {
        nodes: {
            uid: string
        }[]
    }
    allContentfulRelease: {
        nodes: {
            uid: string
        }[]
    }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql<QueryResult>(`
        query {
            allContentfulArtist {
                nodes {
                    uid
                }
            }
            allContentfulRelease {
                nodes {
                    uid
                }
            }
        }
    `)

    if (result.errors) {
        throw result.errors
    }

    if (!result.data) {
        throw new Error('ERROR: Could not fetch content on build')
    }

    createPage({
        path: `artists`,
        component: path.resolve(`./src/pages/index.tsx`),
        context: {},
    })

    createPage({
        path: `releases`,
        component: path.resolve(`./src/pages/index.tsx`),
        context: {},
    })

    result.data?.allContentfulArtist.nodes.forEach(({ uid }: { uid: string }) => {
        createPage({
            path: `artists/${uid}`.toLocaleLowerCase(),
            component: path.resolve(`./src/templates/artist.tsx`),
            context: {
                uid,
            },
        })
    })

    result.data?.allContentfulRelease.nodes.forEach(({ uid }: { uid: string }) => {
        createPage({
            path: `releases/${uid}`.toLocaleLowerCase(),
            component: path.resolve(`./src/templates/release.tsx`),
            context: {
                uid,
            },
        })
    })
}
