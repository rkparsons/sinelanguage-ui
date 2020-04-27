import { Artist, Release } from '~/cms/types'

import { ArtistModel } from '~/models'
import ContentDetail from '~/components/ContentDetail'
import React from 'react'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulArtist: Artist & { release: Release[] }
    }
}

export default ({ data }: Props) => <ContentDetail model={new ArtistModel(data.contentfulArtist)} />

export const query = graphql`
    query($uid: String!) {
        contentfulArtist(uid: { eq: $uid }) {
            ...artistFragment
            release {
                ...releaseFragment
            }
        }
    }
`
