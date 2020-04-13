import { Artist, Podcast, Release } from '~/cms/types'

import Artists from '~/components/Artists'
import Dashboard from '~/components/Dashboard'
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

export default ({ data }: ViewProps) => (
    <Location>
        {({ location }) => (
            <>
                {location.pathname === '/artists' && <Artists />}
                <Dashboard data={data} location={location} />
            </>
        )}
    </Location>
)

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
