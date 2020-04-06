import { FluidObject } from 'gatsby-image'
import { Artist } from './artist'

export type Release = {
    uid: string
    title: string
    artist: Artist
    description: {
        description: string
    }
    image: {
        fluid: FluidObject
    }
    date: Date
}
