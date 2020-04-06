import { FluidObject } from 'gatsby-image'

export type Release = {
    uid: string
    title: string
    description: {
        description: string
    }
    image: {
        fluid: FluidObject
    }
    date: Date
}
