import React from 'react'
import Head from '../components/Head'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default data => (
    <Layout>
        <div>
            <Head title="Artists" />
            <h1>Artists</h1>
            <ol>
                {data.data.allArtistJson.edges.map(edge => {
                    return (
                        <li>
                            <h2>{edge.node.title}</h2>
                        </li>
                    )
                })}
            </ol>
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
                    body
                }
            }
        }
    }
`
