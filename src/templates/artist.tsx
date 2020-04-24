import { Artist, Release } from '~/cms/types'
import { ReleaseModel, VideoReleaseModel } from '~/models'

import Detail from '~/components/Artist/Detail'
import { Format } from '~/constants/format'
import React from 'react'
import { graphql } from 'gatsby'

type Props = {
    data: {
        contentfulArtist: Artist & { release: Release[] }
    }
}

export default ({ data }: Props) => {
    const releases: ReleaseModel[] = data.contentfulArtist.release.map((release) =>
        release.format === Format.VIDEO ? new VideoReleaseModel(release) : new ReleaseModel(release)
    )

    return <Detail artist={data.contentfulArtist} releaseModels={releases} />
}

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
