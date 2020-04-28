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
    allContentfulVideo: {
        nodes: PageNode[]
    }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { createPage } = actions

    const createPageFromNode = (rootPath: string, template: string, uid: string) => {
        createPage({
            path: `${rootPath}/${uid}`.toLocaleLowerCase(),
            component: path.resolve(`./src/templates/${template}.tsx`),
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
            allContentfulVideo {
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

    result.data.allContentfulArtist.nodes.forEach(({ uid }) =>
        createPageFromNode('artists', 'artist', uid)
    )
    result.data.allContentfulEvent.nodes.forEach(({ uid }) =>
        createPageFromNode('events', 'event', uid)
    )
    result.data.allContentfulPodcast.nodes.forEach(({ uid }) =>
        createPageFromNode('podcasts', 'podcast', uid)
    )
    result.data.allContentfulRelease.nodes.forEach(({ uid }) =>
        createPageFromNode('releases', 'release', uid)
    )
    result.data.allContentfulVideo.nodes.forEach(({ uid }) =>
        createPageFromNode('releases/video', 'video', uid)
    )
}
