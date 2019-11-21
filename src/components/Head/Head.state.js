import React from 'react'
import View from './Head.view'
import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'

export default props => {
    const data = useStaticQuery(graphql`
        query {
            ...siteMetadataFragment
        }
    `)

    return <View {...props} siteMetadata={data.site.siteMetadata} />
}
