import React from 'react'
import { graphql } from 'gatsby'
import Head from '../components/Head'

export default ({ data }) => {
    var { thumbnail, title } = data.dataJson

    return (
        <div>
            <Head title="Release" />
            <h1>{title}</h1>
            <img src={thumbnail} alt={title} />
        </div>
    )
}

export const query = graphql`
    query($id: String!) {
        dataJson(id: { eq: $id }) {
            title
            thumbnail
        }
    }
`
