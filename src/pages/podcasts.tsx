import ContentList from '~/components/ContentList'
import { Podcast } from '~/cms/types'
import React from 'react'
import { graphql } from 'gatsby'

type ViewProps = {
    data: {
        allContentfulPodcast: {
            nodes: Podcast[]
        }
    }
}

export default ({ data }: ViewProps) => (
    <ContentList title="PODCASTS" items={data.allContentfulPodcast.nodes} />
)

export const query = graphql`
    {
        allContentfulPodcast {
            nodes {
                ...podcastFragment
            }
        }
    }
`
