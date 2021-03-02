import { FluidObject } from 'gatsby-image'
import { Document } from '@contentful/rich-text-types/dist/types/types'

export type Artist = {
	__typename: string
	id: string
	title: string
	uid: string
	description: {
        description: string
    }
	image: {
        fluid: FluidObject
    }
	bio: {
        json: Document
    }
	date: Date
	socials: string[]
}

export type Event = {
	__typename: string
	id: string
	title: string
	uid: string
	location: string
	description: {
        description: string
    }
	details: {
        json: Document
    }
	artists: string[]
	image: {
        fluid: FluidObject
    }
	teaserVideo: {
        file: {
            url: string
        }
    }
	date: Date
}

export type Podcast = {
	__typename: string
	id: string
	title: string
	relatedArtist: Artist
	uid: string
	description: {
        description: string
    }
	introduction: {
        json: Document
    }
	image: {
        fluid: FluidObject
    }
	wideImage: {
        file: {
            url: string
        }
    }
	date: Date
	track: Track
	trackList: {
        artist: string
        title: string
    }[]
	socials: string[]
}

export type Product = {
	__typename: string
	id: string
	title: string
	format: string
	price: number
	description: {
        description: string
    }
	fileGUID: string
	image: {
        fluid: FluidObject
    }
}

export type Release = {
	__typename: string
	id: string
	title: string
	uid: string
	artist: Artist
	originalArtist: string
	format: string
	description: {
        description: string
    }
	image: {
        fluid: FluidObject
    }
	video: {
        file: {
            url: string
        }
    }
	date: Date
	tracks: Track[]
	products: Product[]
}

export type SiteMetadata = {
	__typename: string
	id: string
	title: string
	url: string
	description: {
        description: string
    }
	image: {
        file: {
            url: string
        }
    }
}

export type Track = {
	__typename: string
	id: string
	title: string
	metadata: {
        title: string        
        streamUrl: string
        duration: number
        samples: number[]
    }
	products: Product[]
}

export type Video = {
	__typename: string
	id: string
	title: string
	uid: string
	artist: Artist
	originalArtist: string
	description: {
        description: string
    }
	credits: {
        json: Document
    }
	image: {
        fluid: FluidObject
    }
	teaserVideo: {
        file: {
            url: string
        }
    }
	srcURL: string
	date: Date
}

