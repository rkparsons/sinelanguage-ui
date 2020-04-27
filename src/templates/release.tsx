import { Artist, Release } from '~/cms/types'
import { ReleaseModel, VideoReleaseModel } from '~/models'

import { Format } from '~/constants/format'
import React from 'react'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulRelease: Release & { artist: Artist & { release: Release[] } }
    }
}

export default ({ data }: Props) => {
    const release =
        data.contentfulRelease.format === Format.VIDEO
            ? new VideoReleaseModel(data.contentfulRelease)
            : new ReleaseModel(data.contentfulRelease)

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
            }
        }
    }
`
