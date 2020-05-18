import { graphql } from 'gatsby'

export const artistFragment = graphql`
	fragment artistFragment on ContentfulArtist {
		__typename
		id
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

export const eventFragment = graphql`
	fragment eventFragment on ContentfulEvent {
		__typename
		id
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
		teaserVideo {
            file {
                url
            }
        }
		date
	}
`

export const podcastFragment = graphql`
	fragment podcastFragment on ContentfulPodcast {
		__typename
		id
		title
		uid
		description {
            description
        }
		introduction {
            json
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

export const productFragment = graphql`
	fragment productFragment on ContentfulProduct {
		__typename
		id
		format
		description {
            description
        }
		price
	}
`

export const releaseFragment = graphql`
	fragment releaseFragment on ContentfulRelease {
		__typename
		id
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
		video {
            file {
                url
            }
        }
		date
		tracks {
            ...trackFragment
        }
		products {
            ...productFragment
        }
	}
`

export const siteMetadataFragment = graphql`
	fragment siteMetadataFragment on ContentfulSiteMetadata {
		__typename
		id
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
		id
		title
		metadata {
            title
            streamUrl
            duration
            samples
        }
	}
`

export const videoFragment = graphql`
	fragment videoFragment on ContentfulVideo {
		__typename
		id
		title
		uid
		artist {
            ...artistFragment
        }
		description {
            description
        }
		image {
            fluid(maxWidth: 2400, quality: 90) {
                ...GatsbyContentfulFluid_withWebp
            }
        }
		teaserVideo {
            file {
                url
            }
        }
		srcURL
		date
	}
`

