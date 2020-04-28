import { Artist, Event, Podcast, Release, Video } from '~/cms/types'
import {
    ArtistModel,
    ContentModel,
    EventModel,
    PodcastModel,
    ReleaseModel,
    VideoModel,
} from '~/models'

import { Format } from '~/constants/format'
import { graphql } from 'gatsby'
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
    const result = useStaticQuery<DashboardItems>(graphql`
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

    const artists = result.allContentfulArtist.nodes.map((x) => new ArtistModel(x))
    const events = result.allContentfulEvent.nodes.map((x) => new EventModel(x))
    const podcasts = result.allContentfulPodcast.nodes.map((x) => new PodcastModel(x))
    const releases = result.allContentfulRelease.nodes.map((x) => new ReleaseModel(x))
    const videos = result.allContentfulVideo.nodes.map((x) => new VideoModel(x))
    const models = ([] as ContentModel[])
        .concat(artists)
        .concat(events)
        .concat(podcasts)
        .concat(releases)
        .concat(videos)

    models.sort((a, b) => b.getDateMs() - a.getDateMs())

    return models
}
