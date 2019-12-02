import Head from '~/components/Head'
import { PrismicArtist } from '~/types/graphql'
import React from 'react'
import SquareImage from '~/components/SquareImage'
import { graphql } from 'gatsby'

type Props = {
    data: {
        prismicArtist: PrismicArtist
    }
}

export default ({ data }: Props) => {
    const { name, image } = data.prismicArtist.data!

    return (
        <div>
            <Head title={name!} />
            <h1>{name}</h1>
            <SquareImage image={image!} />
        </div>
    )
}

export const query = graphql`
    query($uid: String!) {
        prismicArtist(uid: { eq: $uid }) {
            ...artistFragment
        }
    }
`
