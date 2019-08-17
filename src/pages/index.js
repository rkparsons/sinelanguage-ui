import React from 'react'
import Head from '../components/Head'
import Layout from '../components/Layout'
import Dashboard from '../components/Dashboard'
import { graphql } from 'gatsby'

export default ({ data }) => (
    <Layout>
        <div>
            <Head title="News" />
            <Dashboard data={data} />
        </div>
    </Layout>
)

export const query = graphql`
    {
        allDataJson {
            edges {
                node {
                    title
                    thumbnail
                }
            }
        }
    }
`
// query {
//     allPostJson(
//       filter: { language: { eq: "en" } }
//     ) {
//       edges {
//         node {
//           title
//         }
//       }
//     }
//   }
