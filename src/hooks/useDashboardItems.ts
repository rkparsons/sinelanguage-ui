import { Artist, Podcast, Release } from '~/cms/types'
import { ArtistModel, ContentModel, PodcastModel, ReleaseModel, VideoReleaseModel } from '~/models'

import { Format } from '~/constants/format'
import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'

type DashboardItems = {
    allContentfulArtist: {
        nodes: Artist[]
    }
    allContentfulRelease: {
        nodes: Release[]
    }
    allContentfulPodcast: {
        nodes: Podcast[]
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
            allContentfulRelease {
                nodes {
                    ...releaseFragment
                }
            }
            allContentfulPodcast {
                nodes {
                    ...podcastFragment
                }
            }
        }
    `)

    const artists = result.allContentfulArtist.nodes.map((x) => new ArtistModel(x))
    const releases = result.allContentfulRelease.nodes.map((x) =>
        x.format === Format.VIDEO ? new VideoReleaseModel(x) : new ReleaseModel(x)
    )
    const podcasts = result.allContentfulPodcast.nodes.map((x) => new PodcastModel(x))
    const models = ([] as ContentModel[]).concat(artists).concat(releases).concat(podcasts)

    models.sort((a, b) => b.getDateMs() - a.getDateMs())

    return models
}
