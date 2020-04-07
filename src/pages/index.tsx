import { Artist } from '~/cms/types/artist'
import Dashboard from '~/components/Dashboard'
import { Location } from '@reach/router'
import React from 'react'
import { Release } from '~/cms/types/release'
import { graphql } from 'gatsby'

type ViewProps = {
    data: {
        allContentfulArtist: {
            nodes: Artist[]
        }
        allContentfulRelease: {
            nodes: Release[]
        }
    }
}

export default ({ data }: ViewProps) => (
    <Location>{({ location }) => <Dashboard data={data} location={location} />}</Location>
)

export const query = graphql`
    {
        ...dashboardFragment
    }
`
