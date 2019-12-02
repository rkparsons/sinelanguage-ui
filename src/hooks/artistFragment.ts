import { graphql } from 'gatsby'

export const artistFragment = graphql`
    fragment artistFragment on PrismicArtist {
        uid
        data {
            name
            published_date
            image {
                localFile {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`
