import { graphql } from 'gatsby'

export const releaseFragment = graphql`
    fragment releaseFragment on PrismicRelease {
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
