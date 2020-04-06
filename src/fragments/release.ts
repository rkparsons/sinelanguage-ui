import { graphql } from 'gatsby'

export const releaseFragment = graphql`
    fragment releaseFragment on ContentfulRelease {
        uid
        title
        description {
            description
        }
        image {
            fluid(maxWidth: 2400, quality: 90) {
                ...GatsbyContentfulFluid_withWebp
            }
        }
        date
    }
`
