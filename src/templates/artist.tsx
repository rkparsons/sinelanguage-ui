import { Artist } from '~/cms/types'
import Detail from '~/components/Artist/Detail'
import React from 'react'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulArtist: Artist
    }
}

export default ({ data }: Props) => <Detail artist={data.contentfulArtist} />

export const query = graphql`
    query($uid: String!) {
        contentfulArtist(uid: { eq: $uid }) {
            ...artistFragment
        }
    }
`
