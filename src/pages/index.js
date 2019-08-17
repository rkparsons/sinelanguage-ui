import React from 'react'
import Head from '../components/Head'
import Layout from '../components/Layout'
import Dashboard from '../components/Dashboard'
import { graphql } from 'gatsby'

export default ({ data }) => (
    <Layout>
        <div>
            <Head title="News" />
            <Dashboard edges={data.allPodcastJson.edges.concat(data.allArtistJson.edges)} />
        </div>
    </Layout>
)

export const query = graphql`
    {
        allArtistJson {
            edges {
                node {
                    title
                    thumbnail
                }
            }
        }
        allPodcastJson {
            edges {
                node {
                    title
                    thumbnail
                }
            }
        }
    }
`
