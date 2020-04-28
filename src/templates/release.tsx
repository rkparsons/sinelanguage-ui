import { Artist, Release } from '~/cms/types'

import React from 'react'
import { ReleaseModel } from '~/models'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulRelease: Release & { artist: Artist & { release: Release[] } }
    }
}

export default ({ data }: Props) => {
    const release = new ReleaseModel(data.contentfulRelease)

    return release.getDetailComponent()
}

export const query = graphql`
    query($uid: String!) {
        contentfulRelease(uid: { eq: $uid }) {
            ...releaseFragment
            artist {
                release {
                    ...releaseFragment
                }
                video {
                    ...videoFragment
                }
            }
        }
    }
`
