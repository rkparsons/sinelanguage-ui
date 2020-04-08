import { FluidObject } from 'gatsby-image'
import { Document } from '@contentful/rich-text-types/dist/types/types'

export type Artist = {
    __typename: string
    uid: string
    title: string
    description: {
        description: string
    }
    image: {
        fluid: FluidObject
    }
    bio: {
        json: Document
    }
    socials: string[]
    date: Date
}
