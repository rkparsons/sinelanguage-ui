import ContentList from '~/components/ContentList'
import { Podcast } from '~/cms/types'
import { PodcastModel } from '~/models'
import React from 'react'
import { graphql } from 'gatsby'

type ViewProps = {
    data: {
        allContentfulPodcast: {
            nodes: Podcast[]
        }
    }
}

export default ({ data }: ViewProps) => {
    const podcasts = data.allContentfulPodcast.nodes.map((x) => new PodcastModel(x))

    podcasts.sort((a, b) => b.getDateMs() - a.getDateMs())

    return <ContentList models={podcasts} />
}

export const query = graphql`
    {
        allContentfulPodcast {
            nodes {
                ...podcastFragment
            }
        }
    }
`
