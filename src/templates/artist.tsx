import { Artist } from '~/types/artist'
import Head from '~/components/Head'
import React from 'react'
import SquareImage from '~/components/SquareImage'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulArtist: Artist
    }
}

export default ({ data }: Props) => {
    const { title, description, image } = data.contentfulArtist

    return (
        <div>
            <Head title={title} description={description} image={image.fluid.src} />
            <h1>{title}</h1>
            <SquareImage title={title} image={image} />
        </div>
    )
}

export const query = graphql`
    query($uid: String!) {
        contentfulArtist(uid: { eq: $uid }) {
            ...artistFragment
        }
    }
`
