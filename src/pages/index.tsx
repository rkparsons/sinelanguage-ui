import { PrismicArtistConnection, PrismicReleaseConnection } from '~/types/graphql'

import Dashboard from '~/components/Dashboard'
import React from 'react'
import { graphql } from 'gatsby'

type ViewProps = {
    data: {
        allPrismicArtist: PrismicArtistConnection
        allPrismicRelease: PrismicReleaseConnection
    }
}

export default ({ data }: ViewProps) => {
    return <Dashboard {...data} />
}

export const query = graphql`
    {
        ...dashboardFragment
    }
`
