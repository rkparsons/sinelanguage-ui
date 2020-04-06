import { graphql } from 'gatsby'

export const artistFragment = graphql`
    fragment artistFragment on ContentfulArtist {
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
        bio {
            json
        }
        date
    }
`
