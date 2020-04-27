import ContentDetail from '~/components/ContentDetail'
import { Podcast } from '~/cms/types'
import { PodcastModel } from '~/models'
import React from 'react'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulPodcast: Podcast
    }
}

export default ({ data }: Props) => (
    <ContentDetail model={new PodcastModel(data.contentfulPodcast)} />
)

export const query = graphql`
    query($uid: String!) {
        contentfulPodcast(uid: { eq: $uid }) {
            ...podcastFragment
        }
    }
`
