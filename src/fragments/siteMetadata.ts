import { graphql } from 'gatsby'

export const siteMetadataFragment = graphql`
    fragment siteMetadataFragment on Query {
        prismicSiteMetadata {
            data {
                title {
                    text
                }
                description {
                    text
                }
            }
        }
    }
`
