import React from 'react'
import styles from './artists.module.scss'
import Head from '../components/Head'
import Layout from '../components/Layout'
import DashboardItem from '../components/DashboardItem'
import { graphql } from 'gatsby'

export default data => (
    <Layout>
        <div>
            <Head title="News" />
            <div className={styles.container}>
                {data.data.allArtistJson.edges.map(edge => {
                    return <DashboardItem key={edge.node.title} {...edge.node} />
                })}
            </div>
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
