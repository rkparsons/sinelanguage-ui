import { Artist, Event, Podcast, Release } from '~/cms/types'
import {
    ArtistModel,
    ContentModel,
    EventModel,
    PodcastModel,
    ReleaseModel,
    VideoReleaseModel,
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
        }
    `)

    const artists = result.allContentfulArtist.nodes.map((x) => new ArtistModel(x))
    const events = result.allContentfulEvent.nodes.map((x) => new EventModel(x))
    const podcasts = result.allContentfulPodcast.nodes.map((x) => new PodcastModel(x))
    const releases = result.allContentfulRelease.nodes.map((x) =>
        x.format === Format.VIDEO ? new VideoReleaseModel(x) : new ReleaseModel(x)
    )
    const models = ([] as ContentModel[])
        .concat(artists)
        .concat(events)
        .concat(podcasts)
        .concat(releases)

    models.sort((a, b) => b.getDateMs() - a.getDateMs())

    return models
}
