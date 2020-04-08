export const typeDefs = `
	type ContentfulArtist implements Node {
		title: String
		uid: String
		description: contentfulArtistDescriptionTextNode
		image: ContentfulAsset
		bio: contentfulArtistBioRichTextNode
		date: Date
		socials: [String]
	}

	type ContentfulRelease implements Node {
		title: String
		uid: String
		artist: ContentfulArtist
		format: String
		description: contentfulReleaseDescriptionTextNode
		image: ContentfulAsset
		date: Date
		embeddedPlayer: contentfulReleaseEmbeddedPlayerTextNode
	}

	type ContentfulSiteMetadata implements Node {
		title: String
		url: String
		description: contentfulSiteMetadataDescriptionTextNode
		image: ContentfulAsset
	}
`
