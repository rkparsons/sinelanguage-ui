import { Artist, Release } from '~/cms/types'

import ContentDetail from '~/components/ContentDetail'
import React from 'react'
import { ReleaseModel } from '~/models'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulRelease: Release & { artist: Artist & { release: Release[] } }
    }
}

export default ({ data }: Props) => (
    <ContentDetail model={new ReleaseModel(data.contentfulRelease)} />
)

export const query = graphql`
    query($uid: String!) {
        contentfulRelease(uid: { eq: $uid }) {
            ...releaseFragment
            artist {
                release {
                    ...releaseFragment
                }
            }
        }
    }
`
