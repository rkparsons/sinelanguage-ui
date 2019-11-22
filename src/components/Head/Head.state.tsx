import React from 'react'
import View from './Head.view'
import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'

// todo: replace with React.Props<{}>
export default (props: any) => {
    const { site } = useStaticQuery(graphql`
        query {
            ...siteMetadataFragment
        }
    `)

    return <View {...props} siteTitle={site.siteMetadata.title} />
}
