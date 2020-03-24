import { FluidObject } from 'gatsby-image'

export type Artist = {
    uid: string
    title: string
    description: string
    date: Date
    image: {
        fluid: FluidObject
    }
}
