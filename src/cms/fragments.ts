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
		location
		description {
            description
        }
		details {
            json
        }
		artists
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
		relatedArtist {
            ...artistFragment
        }
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
		wideImage {
            file {
                url
            }
        }
		date
		track {
            ...trackFragment
        }
		trackList {
            artist
            title
        }
		socials
	}
`

export const productFragment = graphql`
	fragment productFragment on ContentfulProduct {
		__typename
		id
		title
		format
		price
		description {
            description
        }
		fileGUID
		image {
            fluid(maxWidth: 2400, quality: 90) {
                ...GatsbyContentfulFluid_withWebp
            }
        }
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
		originalArtist
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
		products {
            ...productFragment
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
		originalArtist
		description {
            description
        }
		credits {
            json
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

