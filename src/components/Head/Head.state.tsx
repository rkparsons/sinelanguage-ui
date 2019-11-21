import React from 'react'
import View from './Head.view'
import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'

export default (props: any) => {
    const { site } = useStaticQuery(graphql`
        query {
            ...siteMetadataFragment
        }
    `)

    return <View {...props} siteTitle={site.siteMetadata.title} />
}
