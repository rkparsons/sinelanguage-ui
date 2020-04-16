import { graphql } from 'gatsby'

export const artistFragment = graphql`
	fragment artistFragment on ContentfulArtist {
		__typename
		title
		uid
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
		socials
	}
`

export const podcastFragment = graphql`
	fragment podcastFragment on ContentfulPodcast {
		__typename
		title
		uid
		description {
            description
        }
		image {
            fluid(maxWidth: 2400, quality: 90) {
                ...GatsbyContentfulFluid_withWebp
            }
        }
		date
		track {
            ...trackFragment
        }
	}
`

export const releaseFragment = graphql`
	fragment releaseFragment on ContentfulRelease {
		__typename
		title
		uid
		artist {
            ...artistFragment
        }
		format
		description {
            description
        }
		image {
            fluid(maxWidth: 2400, quality: 90) {
                ...GatsbyContentfulFluid_withWebp
            }
        }
		date
		tracks {
            ...trackFragment
        }
	}
`

export const siteMetadataFragment = graphql`
	fragment siteMetadataFragment on ContentfulSiteMetadata {
		__typename
		title
		url
		description {
            description
        }
		image {
            file {
                url
            }
        }
	}
`

export const trackFragment = graphql`
	fragment trackFragment on ContentfulTrack {
		__typename
		title
		metadata {
            title
            streamUrl
            duration
            samples
        }
	}
`

