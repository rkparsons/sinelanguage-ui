import { FluidObject } from 'gatsby-image'
import { Artist } from './artist'

export type Release = {
    uid: string
    title: string
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
