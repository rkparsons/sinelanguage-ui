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

	type contentfulEventDetailsRichTextNode implements Node {
        nodeType: String
        json: JSON
    }

	type ContentfulEvent implements Node {
		title: String
		uid: String
		location: String
		description: contentfulEventDescriptionTextNode
		details: contentfulEventDetailsRichTextNode
		artists: [String]
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

	type contentfulPodcastTrackListJsonNode implements Node {            
        artist: String
        title: String
    }

	type ContentfulPodcast implements Node {
		title: String
		uid: String
		description: contentfulPodcastDescriptionTextNode
		introduction: contentfulPodcastIntroductionRichTextNode
		image: ContentfulAsset
		date: Date @dateformat
		track: ContentfulTrack
		trackList: [contentfulPodcastTrackListJsonNode]
		socials: [String]
	}

	type contentfulProductDescriptionTextNode implements Node {
        description: String
    }

	type ContentfulProduct implements Node {
		title: String
		format: String
		price: Float
		weightGrams: Float
		widthCentimeters: Float
		lengthCentimeters: Float
		heightCentimeters: Float
		description: contentfulProductDescriptionTextNode
		fileGUID: String
		image: ContentfulAsset
	}

	type contentfulReleaseDescriptionTextNode implements Node {
        description: String
    }

	type ContentfulRelease implements Node {
		title: String
		uid: String
		artist: ContentfulArtist
		originalArtist: String
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

	type contentfulVideoCreditsRichTextNode implements Node {
        nodeType: String
        json: JSON
    }

	type ContentfulVideo implements Node {
		title: String
		uid: String
		artist: ContentfulArtist
		originalArtist: String
		description: contentfulVideoDescriptionTextNode
		credits: contentfulVideoCreditsRichTextNode
		image: ContentfulAsset
		teaserVideo: ContentfulAsset
		srcURL: String
		date: Date @dateformat
	}

`
