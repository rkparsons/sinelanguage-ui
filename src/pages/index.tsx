import { Artist, Podcast, Release } from '~/cms/types'
import {
    ArtistModel,
    ContentModel,
    PodcastModel,
    ReleaseModel,
    VideoReleaseModel,
} from '~/cms/models'

import ContentList from '~/components/ContentList'
import Dashboard from '~/components/Dashboard'
import { Format } from '~/constants/format'
import { Location } from '@reach/router'
import React from 'react'
import { graphql } from 'gatsby'

type ViewProps = {
    data: {
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
}

export default ({ data }: ViewProps) => {
    const artists = data.allContentfulArtist.nodes.map((x) => new ArtistModel(x))
    const releases = data.allContentfulRelease.nodes.map((x) =>
        x.format === Format.VIDEO ? new VideoReleaseModel(x) : new ReleaseModel(x)
    )
    const podcasts = data.allContentfulPodcast.nodes.map((x) => new PodcastModel(x))
    const models = ([] as ContentModel[]).concat(artists).concat(releases).concat(podcasts)

    artists.sort((a, b) => a.content.title.localeCompare(b.content.title))
    releases.sort(function (a, b) {
        return new Date(b.content.date).getTime() - new Date(a.content.date).getTime()
    })
    podcasts.sort(function (a, b) {
        return new Date(b.content.date).getTime() - new Date(a.content.date).getTime()
    })
    models.sort(function (a, b) {
        return new Date(b.content.date).getTime() - new Date(a.content.date).getTime()
    })

    return (
        <Location>
            {({ location }) => (
                <>
                    {location.pathname === '/artists' && <ContentList models={artists} />}
                    {location.pathname === '/releases' && <ContentList models={releases} />}
                    {location.pathname === '/podcasts' && <ContentList models={podcasts} />}
                    <Dashboard models={models} />
                </>
            )}
        </Location>
    )
}

export const query = graphql`
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
`
