import { GatsbyNode } from 'gatsby'
import path from 'path'

type PageNode = {
    uid: string
}

type Content = {
    allContentfulArtist: {
        nodes: PageNode[]
    }
    allContentfulEvent: {
        nodes: PageNode[]
    }
    allContentfulPodcast: {
        nodes: PageNode[]
    }
    allContentfulRelease: {
        nodes: PageNode[]
    }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { createPage } = actions

    const createPageFromNode = (type: string, uid: string) => {
        createPage({
            path: `${type}s/${uid}`.toLocaleLowerCase(),
            component: path.resolve(`./src/templates/${type}.tsx`),
            context: {
                uid,
            },
        })
    }

    const result = await graphql<Content>(`
        query {
            allContentfulArtist {
                nodes {
                    uid
                }
            }
            allContentfulEvent {
                nodes {
                    uid
                }
            }
            allContentfulPodcast {
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

    result.data.allContentfulArtist.nodes.forEach(({ uid }) => createPageFromNode('artist', uid))
    result.data.allContentfulArtist.nodes.forEach(({ uid }) => createPageFromNode('event', uid))
    result.data.allContentfulArtist.nodes.forEach(({ uid }) => createPageFromNode('podcast', uid))
    result.data.allContentfulArtist.nodes.forEach(({ uid }) => createPageFromNode('release', uid))
}
