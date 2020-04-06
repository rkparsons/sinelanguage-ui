import { graphql } from 'gatsby'

export const dashboardFragment = graphql`
    fragment dashboardFragment on Query {
        allContentfulArtist {
            nodes {
                ...artistFragment
            }
        }
        allContentfulRelease {
            nodes {
                ...releaseFragment
            }
        }
    }
`
