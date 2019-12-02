import { graphql } from 'gatsby'

export const podcastFragment = graphql`
    fragment podcastFragment on PrismicPodcast {
        uid
        type
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
