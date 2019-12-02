import { graphql } from 'gatsby'

export const siteMetadataFragment = graphql`
    fragment siteMetadataFragment on Query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
