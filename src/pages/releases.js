import React from 'react'
import Head from '../components/Head'
import Dashboard from '../components/Dashboard'
import { graphql } from 'gatsby'

export default ({ data }) => (
    <div>
        <Head title="Releases" />
        <Dashboard data={data} filter="release" />
    </div>
)

// export const query = graphql`
//     {
//         allDataJson(sort: { fields: [date], order: DESC }) {
//             edges {
//                 node {
//                     ...dashboardItemFragment
//                 }
//             }
//         }
//     }
// `
