import React from 'react'
import Head from '../components/Head'
import Dashboard from '../components/Dashboard'
import { graphql } from 'gatsby'

export default ({ data }) => {
    const artists = data.allPrismicArtist.edges.map(x => ({
        type: 'artist',
        uid: x.node.uid,
        ...x.node.data,
    }))
    const releases = data.allPrismicRelease.edges.map(x => ({
        type: 'release',
        uid: x.node.uid,
        ...x.node.data,
    }))
    const dashboardItems = artists.concat(releases)

    dashboardItems.sort(function(a, b) {
        return new Date(b.published_date) - new Date(a.published_date)
    })

    return (
        <div>
            <Head title="News" />
            <Dashboard dashboardItems={dashboardItems} />
        </div>
    )
}

export const query = graphql`
    {
        allPrismicArtist {
            edges {
                node {
                    ...artistFragment
                }
            }
        }
        allPrismicRelease {
            edges {
                node {
                    ...releaseFragment
                }
            }
        }
    }
`
