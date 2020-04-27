import { Podcast } from '~/cms/types'
import { PodcastModel } from '~/models'
import React from 'react'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulPodcast: Podcast
    }
}

export default ({ data }: Props) => {
    const podcast = new PodcastModel(data.contentfulPodcast)

    return podcast.getDetailComponent()
}

export const query = graphql`
    query($uid: String!) {
        contentfulPodcast(uid: { eq: $uid }) {
            ...podcastFragment
        }
    }
`
