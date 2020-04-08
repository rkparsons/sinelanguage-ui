import { FluidObject } from 'gatsby-image'
import { Document } from '@contentful/rich-text-types/dist/types/types'

export type Artist = {
	__typename: string
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

export type Release = {
	__typename: string
	title: string
	uid: string
	artist: Artist
	format: string
	description: {
        description: string
    }
	image: {
        fluid: FluidObject
    }
	date: Date
	embeddedPlayer: {
        embeddedPlayer: string
    }
}

export type SiteMetadata = {
	__typename: string
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
