export const typeDefs = `
	type contentfulArtistDescriptionTextNode implements Node {
        description: String
    }

	type contentfulArtistBioRichTextNode implements Node {
        nodeType: String
        json: JSON
    }

	type ContentfulArtist implements Node {
		title: String
		uid: String
		description: contentfulArtistDescriptionTextNode
		image: ContentfulAsset
		bio: contentfulArtistBioRichTextNode
		date: Date @dateformat
		socials: [String]
	}

	type contentfulEventDescriptionTextNode implements Node {
        description: String
    }

	type ContentfulEvent implements Node {
		title: String
		uid: String
		description: contentfulEventDescriptionTextNode
		image: ContentfulAsset
		teaserVideo: ContentfulAsset
		date: Date @dateformat
	}

	type contentfulPodcastDescriptionTextNode implements Node {
        description: String
    }

	type contentfulPodcastIntroductionRichTextNode implements Node {
        nodeType: String
        json: JSON
    }

	type ContentfulPodcast implements Node {
		title: String
		uid: String
		description: contentfulPodcastDescriptionTextNode
		introduction: contentfulPodcastIntroductionRichTextNode
		image: ContentfulAsset
		date: Date @dateformat
		track: ContentfulTrack
	}

	type contentfulProductDescriptionTextNode implements Node {
        description: String
    }

	type ContentfulProduct implements Node {
		title: String
		format: String
		price: Float
		description: contentfulProductDescriptionTextNode
	}

	type contentfulReleaseDescriptionTextNode implements Node {
        description: String
    }

	type ContentfulRelease implements Node {
		title: String
		uid: String
		artist: ContentfulArtist
		format: String
		description: contentfulReleaseDescriptionTextNode
		image: ContentfulAsset
		video: ContentfulAsset
		date: Date @dateformat
		tracks: [ContentfulTrack]
		products: [ContentfulProduct]
	}

	type contentfulSiteMetadataDescriptionTextNode implements Node {
        description: String
    }

	type ContentfulSiteMetadata implements Node {
		title: String
		url: String
		description: contentfulSiteMetadataDescriptionTextNode
		image: ContentfulAsset
	}

	type contentfulTrackMetadataJsonNode implements Node {
        title: String
        streamUrl: String
        duration: Int
        samples: [Float]
    }

	type ContentfulTrack implements Node {
		title: String
		metadata: contentfulTrackMetadataJsonNode
		products: [ContentfulProduct]
	}

	type contentfulVideoDescriptionTextNode implements Node {
        description: String
    }

	type ContentfulVideo implements Node {
		title: String
		uid: String
		artist: ContentfulArtist
		description: contentfulVideoDescriptionTextNode
		image: ContentfulAsset
		teaserVideo: ContentfulAsset
		srcURL: String
		date: Date @dateformat
	}

`
