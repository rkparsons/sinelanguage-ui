import Head from '~/components/Head'
import { PrismicEvent } from '~/types/graphql'
import React from 'react'
import SquareImage from '~/components/SquareImage'
import { graphql } from 'gatsby'

type Props = {
    data: {
        prismicEvent: PrismicEvent
    }
}

export default ({ data }: Props) => {
    const { name, image } = data.prismicEvent.data!

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
        prismicEvent(uid: { eq: $uid }) {
            ...eventFragment
        }
    }
`
