import { graphql } from 'gatsby'

export const query = graphql`
    fragment siteMetadataFragment on Query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
