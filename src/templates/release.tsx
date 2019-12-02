import Head from '../components/Head'
import { PrismicRelease } from '~/types/graphql'
import React from 'react'
import SquareImage from '../components/SquareImage'
import { graphql } from 'gatsby'

type Props = {
    data: {
        prismicRelease: PrismicRelease
    }
}

export default ({ data }: Props) => {
    const { name, image } = data.prismicRelease.data!

    return (
        <div>
            <Head title={name!} />
            <h1>{name}</h1>
            <SquareImage image={image!} />
        </div>
    )
}

export const query = graphql`
    query Release($uid: String!) {
        prismicRelease(uid: { eq: $uid }) {
            ...releaseFragment
        }
    }
`
