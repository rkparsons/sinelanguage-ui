import React from 'react'
import { graphql } from 'gatsby'
import Head from '../components/Head'
import Img from 'gatsby-image'

export default ({ data }) => {
    var { fields, title } = data.dataJson

    return (
        <div>
            <Head title={title} />
            <h1>{title}</h1>
            <Img fluid={fields.responsiveThumbnail.childImageSharp.fluid} />
        </div>
    )
}

export const query = graphql`
    query($id: String!) {
        dataJson(fields: { id: { eq: $id } }) {
            ...dashboardItemFragment
        }
    }
`
