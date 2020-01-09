import { graphql } from 'gatsby'

// todo: reuse identical dashboard item fragments

export const artistFragment = graphql`
    fragment artistFragment on PrismicArtist {
        uid
        type
        data {
            name
            description {
                text
            }
            published_date
            image {
                url
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
