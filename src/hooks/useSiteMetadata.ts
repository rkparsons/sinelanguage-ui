import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'

export default () =>
    useStaticQuery(graphql`
        query SiteMetadata {
            ...siteMetadataFragment
        }
    `)
