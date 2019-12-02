import {
    PrismicArtistConnection,
    PrismicEventConnection,
    PrismicPodcastConnection,
    PrismicReleaseConnection,
} from '~/types/graphql'

import Dashboard from '~/components/Dashboard'
import { Location } from '@reach/router'
import React from 'react'
import { graphql } from 'gatsby'

type ViewProps = {
    data: {
        allPrismicArtist: PrismicArtistConnection
        allPrismicRelease: PrismicReleaseConnection
        allPrismicPodcast: PrismicPodcastConnection
        allPrismicEvent: PrismicEventConnection
    }
}

export default ({ data }: ViewProps) => (
    <Location>{({ location }) => <Dashboard {...data} location={location} />}</Location>
)

export const query = graphql`
    {
        ...dashboardFragment
    }
`
