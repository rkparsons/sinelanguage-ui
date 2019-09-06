import React from 'react'
import { graphql } from 'gatsby'
import Head from '../components/Head'

export default ({ data }) => {
    var { title } = data.dataJson

    return (
        <div>
            <Head title={title} />
            <h1>{title}</h1>
        </div>
    )
}

export const query = graphql`
    query($id: String!) {
        dataJson(fields: { id: { eq: $id } }) {
            title
        }
    }
`
