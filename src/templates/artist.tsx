import { Artist } from '~/types/artist'
import Head from '~/components/Head'
import React from 'react'
import RichText from '~/components/RichText'
import SquareImage from '~/components/SquareImage'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulArtist: Artist
    }
}

export default ({ data }: Props) => {
    const { title, description, image, bio } = data.contentfulArtist

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <SquareImage title={title} image={image} />
            <RichText json={bio.json} />
        </>
    )
}

export const query = graphql`
    query($uid: String!) {
        contentfulArtist(uid: { eq: $uid }) {
            ...artistFragment
        }
    }
`
