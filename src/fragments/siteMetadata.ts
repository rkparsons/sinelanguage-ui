import { graphql } from 'gatsby'

export const siteMetadataFragment = graphql`
    fragment siteMetadataFragment on Query {
        contentfulSiteMetadata {
            title
            url
            description {
                description
            }
            image {
                file {
                    url
                }
            }
        }
    }
`
