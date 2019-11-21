import Head from '../components/Head'
import React from 'react'
import { SquareImage } from '../components/SquareImage'
import { graphql } from 'gatsby'

export default ({ data }) => {
    var { fields, title } = data.dataJson

    return (
        <div>
            <Head title={title} />
            <h1>{title}</h1>
            <SquareImage fields={fields} />
        </div>
    )
}

// export const query = graphql`
//     query($id: String!) {
//         dataJson(fields: { id: { eq: $id } }) {
//             ...dashboardItemFragment
//         }
//     }
// `
