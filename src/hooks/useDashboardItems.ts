import { Artist, Event, Podcast, Release, Video } from '~/cms/types'

import { graphql } from 'gatsby'
import { sortByDate } from '~/utils/content'
import { useStaticQuery } from 'gatsby'

type DashboardItems = {
    allContentfulArtist: {
        nodes: Artist[]
    }
    allContentfulEvent: {
        nodes: Event[]
    }
    allContentfulPodcast: {
        nodes: Podcast[]
    }
    allContentfulRelease: {
        nodes: Release[]
    }
    allContentfulVideo: {
        nodes: Video[]
    }
}

export default () => {
    const data = useStaticQuery<DashboardItems>(graphql`
        {
            allContentfulArtist {
                nodes {
                    ...artistFragment
                }
            }
            allContentfulEvent {
                nodes {
                    ...eventFragment
                }
            }
            allContentfulPodcast {
                nodes {
                    ...podcastFragment
                }
            }
            allContentfulRelease {
                nodes {
                    ...releaseFragment
                }
            }
            allContentfulVideo {
                nodes {
                    ...videoFragment
                }
            }
        }
    `)

    const items = sortByDate([
        ...data.allContentfulArtist.nodes,
        ...data.allContentfulEvent.nodes,
        ...data.allContentfulPodcast.nodes,
        ...data.allContentfulRelease.nodes,
        ...data.allContentfulVideo.nodes,
    ])

    return items
}
