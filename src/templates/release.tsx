import Head from '~/components/Head'
import React from 'react'
import { Release } from '~/types/release'
import SquareImage from '~/components/SquareImage'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulRelease: Release
    }
}

export default ({ data }: Props) => {
    const { title, description, image } = data.contentfulRelease

    return (
        <>
            <Head title={title} description={description.description} image={image.fluid.src} />
            <SquareImage title={title} image={image} />
        </>
    )
}

export const query = graphql`
    query($uid: String!) {
        contentfulRelease(uid: { eq: $uid }) {
            ...releaseFragment
        }
    }
`
